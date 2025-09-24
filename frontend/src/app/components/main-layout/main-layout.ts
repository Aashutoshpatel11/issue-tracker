import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header';
import { SubHeader } from '../sub-header/sub-header';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.css'],
  standalone: true,
  imports: [RouterModule, Header, SubHeader],
})
export class MainLayoutComponent {}