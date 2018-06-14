import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../models/blog-post.model';

@Injectable()
export class BlogService {

  constructor(private http: HttpClient) { }

  postBlog(blog: BlogPost): void {

  }
}
