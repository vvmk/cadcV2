import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogViewComponent } from './blog-view.component';
import { BlogContentsComponent } from './blog-contents.component';
import { BlogFormComponent } from './blog-form.component';
import { BlogService } from '../services/blog.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BlogViewComponent,
    BlogContentsComponent,
    BlogFormComponent
  ],
  providers: [
    BlogService
  ]
})
export class BlogModule { }