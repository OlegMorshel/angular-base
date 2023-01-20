import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {

  @Input('myPost') post: Post
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>()
  @ContentChild("info", {static: true}) infoRef: ElementRef

  constructor() {
  }

  ngOnInit() {
    console.log('ngOnInit')
    // console.log(this.infoRef)
  }

  deletePost() {
    this.onDelete.emit(this.post.id)
  }
}
