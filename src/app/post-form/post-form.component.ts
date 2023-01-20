import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  @ViewChild("titleInput", {static: false}) inputRef: ElementRef
  title = ""
  text = ""

  constructor() {
  }

  ngOnInit() {
  }


  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        text: this.text,
        title: this.title
      }
      this.onAdd.emit(post)
      this.title = this.text = ""
    }
  }

  focusTitle() {
    this.inputRef.nativeElement.focus()
  }
}
