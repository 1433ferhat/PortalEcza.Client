import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { httpResource } from '@angular/common/http';
import { ListingModel } from 'library/shared/src/models/listing.model';
import CreateListing from './create/create-listing';

@Component({
  selector: 'app-my-listings',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    AgGridAngular,
    CreateListing
  ],
  templateUrl: './my-listings.html',
  styleUrls: ['./my-listings.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export default class MyListings {
  private gridApi!: GridApi;

  readonly listingResource = httpResource<ListingModel[]>(() => 'api/listings/GetAll');
  readonly listings = computed(() => this.listingResource.value() || []);

  columnDefs: ColDef[] = [
    {
      field: 'product.name',
      headerName: 'Ürün',
      flex: 1,
      minWidth: 200,
    },
    {
      field: 'sku',
      headerName: 'SKU',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Fiyat',
      width: 100,
      valueFormatter: (params) => `₺${params.value?.toFixed(2) || '0.00'}`,
    },
    {
      field: 'quantity',
      headerName: 'Stok',
      width: 80,
    },
    {
      field: 'expiration',
      headerName: 'SKT',
      width: 120,
      valueFormatter: (params) => {
        return params.value
          ? new Date(params.value).toLocaleDateString('tr-TR')
          : '-';
      },
    },
    {
      field: 'isActive',
      headerName: 'Durum',
      width: 100,
      cellRenderer: (params: any) => {
        return `<span class="status ${params.value ? 'active' : 'inactive'}">${
          params.value ? 'Aktif' : 'Pasif'
        }</span>`;
      },
    },
    {
      headerName: 'İşlemler',
      width: 120,
      cellRenderer: () => `
        <div class="actions">
          <button class="action-btn edit">
            <mat-icon>edit</mat-icon>
          </button>
          <button class="action-btn delete">
            <mat-icon>delete</mat-icon>
          </button>
        </div>
      `,
    },
  ];

  defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
  };

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  onCellClicked(event: any) {
    const target = event.event.target.closest('button');
    if (!target) return;

    if (target.classList.contains('edit')) {
      console.log('Edit:', event.data);
    } else if (target.classList.contains('delete')) {
      console.log('Delete:', event.data);
    }
  }
}
