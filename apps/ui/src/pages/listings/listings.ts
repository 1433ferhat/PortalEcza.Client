import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  imports: [],
  templateUrl: './listings.html',
  styleUrl: './listings.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Listings {

}
