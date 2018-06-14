import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'cxa-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css'],
  providers: [ BlogService ]
})
export class BlogFormComponent implements OnInit {
  blogPost = new BlogPost( "Why is DesignOps a thing?",
    "[ body ]",
    "June 13, 2018 9",
    ["testing", "writing", "design", "ops", "programming"]
  );
  
  confirmed = false;
  constructor(private blogService: BlogService) { }

  ngOnInit() {

  }

  preview(): void {
    this.confirmed = true;
    
  }

  submitPost(form: NgForm): void {
    console.log(form.value);
  }
}
