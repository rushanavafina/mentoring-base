import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from "../../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../../users.service";
import { CreateUserFormComponent } from "./create-user-form/create-user-form.component";
import { User } from "../../interface/user-interface";



@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserFormComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersComponent {
 
  readonly usersApiService = inject(UsersApiService);

  readonly usersService = inject(UsersService);


  constructor() {
    this.usersApiService.getUsers().subscribe(
      (response: User[]) => {
        this.usersService.setUsers(response);  
      });
      
      this.usersService.users$.subscribe((users) => console.log(users));
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }

  public createUser(formDate: any) {
    this.usersService.createUser({
      id: new Date().getTime(),
      name: formDate.name,
      email: formDate.email,
      website: formDate.website,
      company: {
        name: formDate.companyName,
      }
    });
    console.log('ДАННЫЕ ФОРМЫ: ', event);
    console.log(new Date().getTime());
  }

  getTodoAuthor(id: number) {
    
  }
}

