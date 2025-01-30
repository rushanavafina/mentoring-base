import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "./components/todos/todos.component";

@Injectable({providedIn: 'root'})
export class TodosService {
    private todosSubject$ = new BehaviorSubject<Todo[]>([])
    todos$ = this.todosSubject$.asObservable();

    setTodos(todos: Todo[]) {
        this.todosSubject$.next(todos)
    }

    editTodo(editedTodo: Todo) {
        this.todosSubject$.next(
            this.todosSubject$.value.map(todo => todo.id === editedTodo.id ? editedTodo : todo)
        )
    }

     createTodo(user: Todo) {
          this.todosSubject$.next(
                [...this.todosSubject$.value, user]
            )
        }
    
        deleteTodo(id: number) {
             this.todosSubject$.next(
                this.todosSubject$.value.filter(item => item.id !== id)
              )
        }
}