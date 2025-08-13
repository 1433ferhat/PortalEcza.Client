import { Component, ChangeDetectionStrategy, ViewEncapsulation, signal } from '@angular/core';
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

@Component({
  selector: 'app-product-list',
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
    MatChipsModule
  ],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ProductList {
  selectedProducts = signal(new Set<number>());
  sortBy = signal('name');
  
  // Mock data for design
  products = signal([
    { id: 1, name: 'Nutrigen Üzüm Pediatrik Şurup 200 ml', barcode: '8699999999999', manufacturer: 'Hasta Bildeli', stock: 55, price: 209.98, vat: 1, expiry: '2026-01' },
    { id: 2, name: 'Spirit Ultra Care Medium Dış Fırçası', barcode: '8699999999998', manufacturer: 'Hasta Bildeli', stock: 88, price: 89.23, vat: 10, expiry: '2026-02' },
    { id: 3, name: 'Mediwell Dudak Bakım Kremi Starts 24%', barcode: '8699999999997', manufacturer: 'Hasta Bildeli', stock: 149, price: 498.98, vat: 20, expiry: '2026-03' },
    { id: 4, name: 'The Ceel Dolgunlaştırıcı Saç Spreyi Kahverengi 100 ml', barcode: '8699999999996', manufacturer: 'Hasta Bildeli', stock: 14, price: 177.77, vat: 20, expiry: '2026-04' },
    { id: 5, name: 'Ossisoff Burun Spreyi 20 ml', barcode: '8699999999995', manufacturer: 'Hasta Bildeli', stock: 73, price: 217.33, vat: 10, expiry: '2026-05' },
    { id: 6, name: 'Beriko Enjektör 5 cc 3 Parça Yeşil', barcode: '8699999999994', manufacturer: 'Hasta Bildeli', stock: 24396, price: 1.69, vat: 10, expiry: '2029-06' },
    { id: 7, name: 'Magnomore All Day 90 Tablet', barcode: '8699999999993', manufacturer: 'Hasta Bildeli', stock: 16, price: 433.97, vat: 1, expiry: '2028-07' },
  ]);
  
  pageSize = 25;
  currentPage = signal(0);
}