import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  post: any;
  allPosts: any[] = [];
  currentIndex: number = -1;
  previousPost: any = null;
  nextPost: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.allPosts = this.blogService.getBlogPosts();
    this.loadPost();

    // Subscribe to route changes to handle navigation between blog posts
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadPost();
      }
    });
  }

  loadPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.post = this.blogService.getBlogPost(id);

      if (this.post) {
        // Find the index of the current post
        this.currentIndex = this.allPosts.findIndex(post => post.id === id);

        // Set previous and next posts
        this.previousPost = this.currentIndex > 0 ? this.allPosts[this.currentIndex - 1] : null;
        this.nextPost = this.currentIndex < this.allPosts.length - 1 ? this.allPosts[this.currentIndex + 1] : null;
      }
    }
  }

  navigateToPreviousPost(): void {
    if (this.previousPost) {
      this.router.navigate(['/blog', this.previousPost.id]);
    }
  }

  navigateToNextPost(): void {
    if (this.nextPost) {
      this.router.navigate(['/blog', this.nextPost.id]);
    }
  }
}
