import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { SearchBarComponent } from './search-bar/search-bar.component';


const routes:Routes = [
  {path:'', component:HomePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    SearchBarComponent
  ],
  exports:[RouterModule],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    AutocompleteLibModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
