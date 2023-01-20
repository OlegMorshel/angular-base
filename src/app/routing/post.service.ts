import {Injectable} from "@angular/core";

export interface IPost {
  title: string
  text: string
  id: number
}
@Injectable({providedIn: "root"})
export class PostService {
  posts: IPost[] = [
    {title: "title 1", text: "text 1", id: 1},
    {title: "title 2", text: "text 2", id: 2},
    {title: "title 3", text: "text 3", id: 3},
    {title: "title 4", text: "text 4", id: 4},
  ]


  getById(id: number){
    return this.posts.find(post => post.id === id)
  }
}
