import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';
import { ContactPageComponent } from './contact-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AboutPageComponent, ContactPageComponent]
})
export class DetailsModule { }
