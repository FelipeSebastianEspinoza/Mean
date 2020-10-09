import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Post[];
  constructor(private http: HttpClient) {} 


  getPosts() {
    return this.http.get(`http://localhost:3000/post`);
  }
}
