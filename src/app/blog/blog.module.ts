import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BlogViewComponent } from './blog-view.component';
import { BlogContentsComponent } from './blog-contents.component';
import { BlogFormComponent } from './blog-form.component';
import { BlogService } from '../services/blog.service';
import { BlogArticleComponent } from './blog-article.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    BlogViewComponent,
    BlogContentsComponent,
    BlogFormComponent,
    BlogArticleComponent
  ]
})
export class BlogModule { }
