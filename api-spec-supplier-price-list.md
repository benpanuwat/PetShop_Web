# API Spec — ราคาต้นทุนสินค้าแยกตามผู้ขาย

## ตาราง DB ที่เกี่ยวข้อง
- `suppliers` — รายชื่อผู้ขาย
- `supplier_price_lists` — ประวัติราคาต้นทุนสินค้าของแต่ละผู้ขาย

---

## 1. GET `/supplier/list`
ดึงรายชื่อผู้ขายทั้งหมด (status = 1) สำหรับ dropdown เลือกผู้ขาย

**Response**
```json
{
  "status": true,
  "data": [
    { "id": 1, "name": "บริษัท ABC" },
    { "id": 2, "name": "บริษัท XYZ" }
  ]
}
```

---

## 2. GET `/supplier_price_list/list/:product_id`
ดึง**ราคาต้นทุนล่าสุด**ของสินค้านั้น แยกตามผู้ขาย
(คือ record ล่าสุดของแต่ละ `supplier_id` สำหรับ `product_id` นั้น)

**Path param:** `product_id`

**SQL แนะนำ**
```sql
SELECT spl.supplier_id, s.name AS supplier_name, spl.cost
FROM supplier_price_lists spl
INNER JOIN suppliers s ON s.id = spl.supplier_id
WHERE spl.id IN (
  SELECT MAX(id) FROM supplier_price_lists
  WHERE product_id = :product_id
  GROUP BY supplier_id
)
ORDER BY s.name;
```

**Response**
```json
{
  "status": true,
  "data": [
    { "supplier_id": 1, "supplier_name": "บริษัท ABC", "cost": 260.00 },
    { "supplier_id": 3, "supplier_name": "บริษัท XYZ", "cost": 185.00 }
  ]
}
```

---

## 3. POST `/supplier_price_list`
เพิ่มราคาต้นทุนใหม่ (INSERT เท่านั้น ไม่ UPDATE/DELETE)

**Request Body**
```json
{
  "product_id": 100,
  "supplier_id": 1,
  "cost": 270.00
}
```

**Logic**
- `INSERT INTO supplier_price_lists (product_id, supplier_id, cost, created_at, created_date)`
- `created_at` = user_id จาก JWT
- `created_date` = now()

**Response**
```json
{
  "status": true,
  "message": "เพิ่มสำเร็จ"
}
```

---

## หมายเหตุ
- ทุก endpoint ต้องมี Authorization header (JWT) ตามระบบเดิม
- `cost` เป็น double, ห้าม negative
- ไม่มี UPDATE / DELETE — ทุกการเปลี่ยนราคาคือการ INSERT record ใหม่ เพื่อเก็บประวัติ
