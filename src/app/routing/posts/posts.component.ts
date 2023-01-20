import { Component } from '@angular/core';
import {IPost, PostService} from "../post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: IPost[] = []
  constructor(private postService: PostService) {
  }
}
