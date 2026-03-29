import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/api';
import { Subject, debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LocationReportService } from '../location-report/location-report.service';

@Component({
  selector: 'app-location-report',
  templateUrl: './location-report.component.html',
  styleUrls: ['./location-report.component.scss']
})
export class LocationReportComponent {
  public permissions: string[] = [];

  public displayAdd: boolean = false;
  public displayEdit: boolean = false;

  public urlData: any = {
    location_id: '',
  };

  @ViewChild('dt') table: Table;
  public loading: boolean;
  public totalRecords: number = 0;
  public search: FormControl = new FormControl('');
  public data: any[];

  public locations: any = [];

  public formSetting: FormGroup;

  public editId: string;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _service: LocationReportService,
    private _messageService: MessageService,
  ) { this.permissions = JSON.parse(localStorage.getItem('permissions')); }

  ngOnInit() {
    this._route.queryParamMap.subscribe(params => {
      this.urlData.location_id = params.get('location_id');
    });

    this.formSetting = this._fb.group({
      location: [null, Validators.required],
    });


    this.search.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap((query) => {
          this.loading = true;

          const first = this.table.first;
          const rows = this.table.rows;
          const page = first / rows + 1;

          this._service.page({ perPage: rows, page: page, search: query, searchId: this.urlData.location_id })
            .subscribe((resp: any) => {
              this.data = resp.data;
              this.data = this.data.map((item, index) => ({ ...item, order: index + 1 }));
              this.totalRecords = resp.totalRecords;
              this.loading = false;
            });
        }),
      )
      .subscribe();

    this.loadLocation();
  }

  loadTable(event: LazyLoadEvent) {
    this.loading = true;

    const page = event.first / event.rows + 1;

    this._service.page({ perPage: event.rows, page, search: this.search.value, searchId: this.urlData.location_id })
      .subscribe((resp: any) => {
        this.data = resp.data;
        this.totalRecords = resp.totalRecords;
        this.loading = false;
      });
  }

  loadLocation() {
    this._service.getCheckupLocation()
      .subscribe((resp: any) => {
        this.locations = resp.data;
        if (this.urlData.location_id != null) {
          const location = this.locations.find(item => item.id == this.urlData.location_id);
          this.formSetting.patchValue({ location: location });
        }
        else {
          if (this.locations.length > 0) {
            this.formSetting.patchValue({ location: this.locations[0] });
            this.selectLocation();
          }
        }
      });
  }

  selectLocation() {
    this.urlData.location_id = this.formSetting.get('location').value.id;
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { location_id: this.formSetting.get('location').value.id },
      queryParamsHandling: 'merge',
    });

    this.table.reset();
  }

  reportLocation() {
    this._service.reportLocation(this.formSetting.get('location')?.value.id).subscribe({
      next: (resp: any) => {
        window.open(resp.data.url, '_blank');
      },
      error: (err) => {
        this.showError(err.error.message);
      },
    });
  }

  showError(massage: string) {
    this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: massage });
  }
  showSuccess(massage: string) {
    this._messageService.add({ severity: 'success', summary: 'แจ้งเตือน', detail: massage });
  }
}
