import {Component} from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
  e: number = Math.E
  str = "hello world"

  date: Date = new Date()

  float = 0.42

  obj = {
    a: 1,
    b: {
      c: 12,
      d: {
        e: "qwe",
        f: "we"
      }
    }
  }
}
