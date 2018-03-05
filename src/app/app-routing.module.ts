import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { FormComponent } from './components/form/form.component';
import { PreviewComponent } from './components/preview/preview.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'preview', component: PreviewComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/',
    pathMatch: 'full'
   }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    FormComponent,
    PreviewComponent
  ],
  schemas: [
  CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppRoutingModule { }
