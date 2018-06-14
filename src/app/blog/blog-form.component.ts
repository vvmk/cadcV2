import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../entity/BlogPost';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'cxa-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  ngOnInit() {

  }

  preview(): void {
    console.log("TODO: trigger preview");
  }

}
