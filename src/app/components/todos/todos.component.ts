import { Component, inject } from '@angular/core';
import { TodosApiService } from '../../todos-api.service';
import { NgFor } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { Todo } from '../../todo-interface';


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
    (response: Todo[]) => {
      this.todos = response;
    }
  )
}

deletoTodo(id: number) {
  this.todos = this.todos.filter(
    todo => todo.id !== id);
    }
}
export { Todo };

