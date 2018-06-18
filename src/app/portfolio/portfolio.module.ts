import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioPageComponent } from './portfolio-page.component';
import { PortfolioItemComponent } from './portfolio-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PortfolioPageComponent, PortfolioItemComponent]
})
export class PortfolioModule { }
