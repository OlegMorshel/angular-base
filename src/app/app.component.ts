import {Component} from '@angular/core';
import {AppCounterService} from "./service/app-counter.service";
import {LocalCounterService} from "./service/local-counter.service";

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-cource-vladilen';
  search = ""
  isVisible = true
  posts: Array<Post> = [
    {title: "Start learn new technology", text: "Some long long long long long long long long long text", id: 1},
    {title: "Continue learn any technology", text: "Some long any long long any long any long any text", id: 2},
  ]


  constructor(
    public appCounterService: AppCounterService,
    public localCounterService: LocalCounterService) {
  }

  updatePosts(post: Post) {
    this.posts.unshift(post)
  }

  deletePost(id: number) {
    this.posts = this.posts.filter(post => post.id !== id)
  }
}
