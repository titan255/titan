import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
 import { FooterComponent } from '../footer/footer.component';
  import { PackagePageComponent } from '../package-page/package-page.component';
 import { PartnerComponent } from '../partner/partner.component';
 
import { PromotionComponent } from '../promotion/promotion.component';
 import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
 
  
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FooterComponent ,NavbarComponent,  PackagePageComponent,  PromotionComponent,
    PartnerComponent,  CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
 
  
 
  
 
})
export class HomePageComponent {
  backgroundImage = 'url(\'assets/img/web background.jpg\')';
}
