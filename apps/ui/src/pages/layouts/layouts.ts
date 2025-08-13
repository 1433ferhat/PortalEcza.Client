import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from './header/header';
import Footer from './footer/footer';

@Component({
  imports: [CommonModule, RouterModule, Header, Footer],
  templateUrl: './layouts.html',
  styleUrl: './layouts.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Layouts {}
