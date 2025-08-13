import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@Component({
  selector: 'app-listings',
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './listings.html',
  styleUrl: './listings.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Listings {
  selectedListings = signal(new Set<number>());
  sortBy = signal('date');

  // Mock data - kullanıcının kendi ilanları
  myListings = signal([
    {
      id: 1,
      name: 'Nutrigen Üzüm Pediatrik Şurup 200 ml',
      barcode: '8699999999999',
      status: 'Aktif',
      stock: 55,
      price: 209.98,
      vat: 1,
      expiry: '2026-01-15',
    },
    {
      id: 2,
      name: 'Spirit Ultra Care Medium Dış Fırçası',
      barcode: '8699999999998',
      status: 'Aktif',
      stock: 88,
      price: 89.23,
      vat: 10,
      expiry: '2026-02-20',
    },
    {
      id: 3,
      name: 'Mediwell Dudak Bakım Kremi',
      barcode: '8699999999997',
      status: 'Pasif',
      stock: 149,
      price: 498.98,
      vat: 20,
      expiry: '2026-03-10',
    },
    {
      id: 4,
      name: 'The Ceel Dolgunlaştırıcı Saç Spreyi',
      barcode: '8699999999996',
      status: 'Aktif',
      stock: 14,
      price: 177.77,
      vat: 20,
      expiry: '2026-04-05',
    },
    {
      id: 5,
      name: 'Ossisoff Burun Spreyi 20 ml',
      barcode: '8699999999995',
      status: 'Aktif',
      stock: 73,
      price: 217.33,
      vat: 10,
      expiry: '2026-05-15',
    },
  ]);

  pageSize = 25;
  currentPage = signal(0);
}
