import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';

@Component({
  selector: 'cxa-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.css']
})
export class BlogArticleComponent implements OnInit {
  @Input() article: BlogPost;

  constructor() { }

  ngOnInit() {
  }
}
