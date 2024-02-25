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
import { CardDetailComponent } from './card-detail/card-detail.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TopCardsComponent } from './top-cards/top-cards.component';


const routes:Routes = [
  {path:'', component:HomePageComponent},
  {path:'card-detail', component:CardDetailComponent, children: [
    { path: ':name', component: CardDetailComponent },
  ]},
  {path:'top-cards', component:TopCardsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    SearchBarComponent,
    CardDetailComponent,
    TopCardsComponent
  ],
  exports:[RouterModule],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
