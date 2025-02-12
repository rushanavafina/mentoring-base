import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "./interface/user-interface";

@Injectable({providedIn: 'root'})
export class UsersService {
    private usersSubject$ = new BehaviorSubject<User[]>([])
    users$ = this.usersSubject$.asObservable();

    setUsers(users: User[]) {
        this.usersSubject$.next(users);
    }

    editUser(editedUser: User) {
       this.usersSubject$.next(
            this.usersSubject$.value.map(user => user.id === editedUser.id ? editedUser : user)
        )
    }

    createUser(user: User) {
        const existingUser = this.usersSubject$.value.find(
            (currentElement) => currentElement.email === user.email
        );

        console.log(existingUser);

        if (existingUser !== undefined) {
            alert('ТАКОЙ EMAIL УЖЕ ЗАРЕГИСТРИРОВАН');
        } else {
            this.usersSubject$.next([...this.usersSubject$.value, user]);  
            alert('НОВЫЙ ПОЛЬЗОВАТЕЛЬ УСПЕШНО ДОБАВЛЕН');
        }
    }

    deleteUser(id: number) {
         this.usersSubject$.next(
            this.usersSubject$.value.filter(user => user.id !== id)
          )
    }
}