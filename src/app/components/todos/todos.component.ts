import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../../todos-api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosService } from '../../todos.service';
import { Todo } from '../../interface/todo-interface';
import { CreateTodoFormComponent } from './create-todo-form/create-todo-form.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, TodoCardComponent, AsyncPipe, CreateTodoFormComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodosComponent {
readonly todosApiService = inject(TodosApiService);
readonly todosService = inject(TodosService);

constructor() {
  this.todosApiService.getTodos().subscribe(
    (response: Todo[]) => {
      this.todosService.setTodos(response); 
    }
  )
}

deleteTodo(id: number) {
  this.todosService.deleteTodo(id);
    }

    public createUser(formDate: any) {
      this.todosService.createTodo({
        id: new Date().getTime(),
        title: formDate.title,
        userId: formDate.userId,
        completed: formDate.completed,
      });

      console.log('ДАННЫЕ ФОРМЫ: ');
      console.log(new Date().getTime());
    }
  
    getTodoAuthor(id: number) {  
    }
  }




 