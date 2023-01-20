import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo, TodoService} from "./service/todo.service";

@Component({
  selector: 'app-backconnection',
  templateUrl: './backconnection.component.html',
  styleUrls: ['./backconnection.component.scss']
})
export class BackconnectionComponent implements OnInit {


  todos: Todo[] = []
  loading = false
  todoTitle = ""

  constructor(
    private http: HttpClient,
    private todoService: TodoService
  ) {
  }

  ngOnInit(): void {
    this.fetch()
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return
    }

    const newTodo: Todo = {
      completed: false,
      title: this.todoTitle
    }
    this.todoService.addTodo(newTodo)
      .subscribe(todo => {
        this.todos.push(todo)
      })
  }

  fetch() {
    this.loading = true
    this.todoService.fetch()
      .subscribe(todos => {
        this.todos = todos
        this.loading = false
      })
  }

  removeTodo(id: number | undefined) {
    if (id !== undefined) {
      this.todoService.removeTodo(id)
        .subscribe(() => this.todos = this.todos.filter(todo => todo.id !== id))
    }
  }

  completeTodo(id: number | undefined) {
    if (id !== undefined) {
      this.todoService.completeTodo(id)
        .subscribe(((todo) => {
          console.log(todo)
        }), ((error) => {
          console.log(error)
        }))
    }
  }

}
