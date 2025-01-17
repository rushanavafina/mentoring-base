import { Component, inject } from '@angular/core';
import { TodosApiService } from '../../todos-api.service';
import { NgFor } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';


export interface Todo {
  userId: number,
  id: number,
  title: string,
  complated: boolean
}

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, TodoCardComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
readonly todosApiService = inject(TodosApiService);
todos: Todo[] = [];

constructor() {

  this.todosApiService.getTodos().subscribe(
    (response: any) => {
      this.todos = response;
    }
  )
}

deletoTodo(id: any) {
  this.todos = this.todos.filter(
    todo => {
      if(id === todo.id) {
        return false
      } else {
        return true;
      }
    }
  )
}
}
