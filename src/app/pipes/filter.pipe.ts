import {Pipe, PipeTransform} from '@angular/core';
import {Post} from "../app.component";

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string): Post[] {
    if (!search.trim()) {
      return posts;
    }
    return posts.filter(post => post.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || post.title.toLocaleLowerCase().includes(search.toLowerCase()))
  }
}

