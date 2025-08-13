import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { httpResource } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { ListingModel } from '@shared/models/listing.model';

@Component({
  selector: 'app-listings',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatSliderModule,
    AgGridAngular,
  ],
  templateUrl: './listings.html',
  styleUrls: ['./listings.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export default class Listings {
  private gridApi!: GridApi;

  readonly listingResource = httpResource<ListingModel[]>(() => 'api/listings/GetAll');
  readonly listings = computed(() => this.listingResource.value() || []);

  columnDefs: ColDef[] = [
    {
      field: 'product.images',
      headerName: 'Resim',
      width: 80,
      cellRenderer: (params: any) => {
        const image = params.value?.[0];
        return image ? 
          `<img src="${image.src}" style="width:40px;height:40px;object-fit:cover;border-radius:4px;">` : 
          '<div class="no-image">Resim Yok</div>';
      }
    },
    { field: 'product.name', headerName: 'Ürün', flex: 2, sortable: true, filter: true },
    { field: 'sku', headerName: 'SKU', width: 120, sortable: true, filter: true },
    {
      field: 'price',
      headerName: 'Fiyat',
      width: 100,
      type: 'numericColumn',
      cellRenderer: (params: any) => `₺${params.value?.toLocaleString('tr-TR', {minimumFractionDigits: 2}) || '0,00'}`
    },
    {
      field: 'quantity',
      headerName: 'Stok',
      width: 80,
      type: 'numericColumn'
    },
    {
      field: 'expiration',
      headerName: 'S.K.T',
      width: 120,
      cellRenderer: (params: any) => {
        if (!params.value) return '-';
        return new Date(params.value).toLocaleDateString('tr-TR');
      }
    },
    {
      field: 'isActive',
      headerName: 'Durum',
      width: 100,
      cellRenderer: (params: any) => 
        `<mat-chip class="${params.value ? 'active-chip' : 'inactive-chip'}">
          ${params.value ? 'Aktif' : 'Pasif'}
        </mat-chip>`
    },
    {
      field: 'isFeatured',
      headerName: 'Öne Çıkan',
      width: 120,
      cellRenderer: (params: any) => params.value ? '⭐' : ''
    },
    {
      headerName: 'İşlemler',
      width: 120,
      cellRenderer: () => `
        <button mat-icon-button class="action-btn edit-btn">
          <mat-icon>edit</mat-icon>
        </button>
        <button mat-icon-button class="action-btn delete-btn">
          <mat-icon>delete</mat-icon>
        </button>
      `
    }
  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 80
  };

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  onCellClicked(event: any) {
    if (event.event.target.closest('.edit-btn')) {
      this.editListing(event.data);
    } else if (event.event.target.closest('.delete-btn')) {
      this.deleteListing(event.data);
    }
  }

  editListing(listing: ListingModel) {
    console.log('Edit listing:', listing);
  }

  deleteListing(listing: ListingModel) {
    console.log('Delete listing:', listing);
  }
}