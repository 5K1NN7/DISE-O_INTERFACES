
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trabajo5Component } from './trabajo-5.component';
import { CarouselModule } from 'primeng/carousel';  
import { TagModule } from 'primeng/tag';             
import { ButtonModule } from 'primeng/button';        
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Trabajo5Component
  ],
  imports: [
    CommonModule,
    CarouselModule,  
    TagModule,
    ButtonModule,
    RouterModule.forChild([
      { path: '', component: trabajo-5Component }  
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Trabajo5Module { }
