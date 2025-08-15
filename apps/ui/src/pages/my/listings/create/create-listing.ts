import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-listing-create',
  imports: [CommonModule,FormsModule,NgxMaskDirective],
  templateUrl: './create-listing.html',
  styleUrl: './create-listing.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreateListing {
  save(form: NgForm) {
    if (!form.valid) return;
  }
}
