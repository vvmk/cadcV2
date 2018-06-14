import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page.component';
import { PortfolioPageComponent } from './portfolio/portfolio-page.component';
import { AboutPageComponent } from './details/about-page.component';
import { ContactPageComponent } from './details/contact-page.component';
import { BlogContentsComponent } from './blog/blog-contents.component';
import { BlogFormComponent } from './blog/blog-form.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'blog', component: BlogContentsComponent },
  { path: 'blog/new', component: BlogFormComponent },
  { path: 'portfolio', component: PortfolioPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
