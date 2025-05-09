import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogPosts: any[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogPosts = this.blogService.getBlogPosts();
  }
}
