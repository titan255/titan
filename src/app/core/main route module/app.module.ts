import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app file/app.component';
 
 import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIconModule} from '@angular/material/icon'; 
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomePageComponent } from '../../shared/component/home-page/home-page.component';
 import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'; 
  import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from '../../shared/component/navbar/navbar.component';
 import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
 import {MatPaginatorModule} from '@angular/material/paginator';
import { CommonModule, NgFor } from '@angular/common';
 import {MatCardModule} from '@angular/material/card';
  import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
//  import { TeamPageComponent } from "../../shared/component/team-page/team-page.component";
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
 import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
     
@NgModule({
  declarations: [
 
    AppComponent,
     ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    HttpClientModule,
     MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatCardModule,
    MatSnackBarModule,
    //  TeamPageComponent,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    CommonModule,
    MatTooltipModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatButtonModule
    
],
exports:[
 
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    CommonModule
     
],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    // [AdminGuard, SuperadminGuard ,UserGuard,AuthService],
    // [{ provide : HTTP_INTERCEPTORS,useClass : AuthInterceptor,multi:true}],
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent],
})
export class AppModule { }
