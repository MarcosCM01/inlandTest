import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePackageComponent } from './create-package/create-package.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        component: CreatePackageComponent,
        path: 'create-package'
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CreatePackageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }