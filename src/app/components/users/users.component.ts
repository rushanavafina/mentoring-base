import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { UsersApiService } from "../../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../../users.service";
import { CreateUserFormComponent } from "./create-user-form/create-user-form.component";
import { createUser, User } from "../../interface/user-interface";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ButtonCreateUserComponent } from "./button-create-user/button-create-user.component";



@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe, MatButtonModule, MatIconModule, ButtonCreateUserComponent],
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
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }

  editUser(user: User) {
    this.usersService.editUser({
      ...user,
      company: {
        name: user.company.name,
    },
  });
  }

  public createUser(formDate: createUser) {
    this.usersService.createUser({
      id: new Date().getTime(),
      name: formDate.name,
      email: formDate.email,
      website: formDate.website,
      company: {
        name: formDate.company.name,
      }
    });
  }


}

