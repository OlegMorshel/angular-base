import {Component} from '@angular/core';
import {PostService} from "../post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostNewComponent {
  constructor(private postsService: PostService) {
  }
}
