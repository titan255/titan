import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-package-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './package-page.component.html',
  styleUrl: './package-page.component.css'
})
export class PackagePageComponent {
  backgroundImage = 'url(\'assets/img/bg2.jpg\')';
}
