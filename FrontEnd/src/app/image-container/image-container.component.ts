import { Component, OnInit } from '@angular/core';

import { PostService } from '../services/posts/post.service';
import { Post } from '../services/posts/post';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css'],
  providers: [PostService],
})
export class ImageContainerComponent implements OnInit {
  posts = [];
  myposts = this.posts[0];

  constructor(public postService: PostService) {}

  ngOnInit(): void {
    this.getExample();
  }
  getExample() {
    this.postService.getPosts().subscribe((res) => {
      this.postService.posts = res as Post[];
    });
  }
}
