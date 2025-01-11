import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, Injectable } from '@angular/core';

export interface User {
  id:       number;
  name:     string;
  username: string;
  email:    string;
  address: {
      street:  string;
      suite:   string;
      city:    string;
      zipcode: string;
      geo: {
          lat: string;
          lng: string;
      };
  };
  phone:   string;
  website: string;
  company: {
      name:        string;
      catchPhrase: string;
      bs:          string;
  };
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  readonly apiService  = inject(HttpClient)
  users: User[] = [];

  constructor() {
    this.apiService.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (response: any) => {
        this.users = response;
        console.log ('USERS:', this.users)
      }
    )
  }

  deleteUser(id: number) {
    this.users = this.users.filter(
      item => {
        if (id === item.id) {
          return false
        } else {
          return true
        }
      }
    )
  }
}


