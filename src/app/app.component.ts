import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const newPages:number[] = [5, 4, 3, 2, 1]

const func = (date: string) => {return date}

const itemName: string = "О компании"

const vuzov = func (itemName)


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';

  isShowCatalog = true

  isShowImg = true

  readonly headerItem1 = 'Главная';

  readonly headerItem2 = 'О компании';

  readonly headerItem3 ='Каталог';


  readonly lightItem1 = 'Каталог';

  readonly lightItem2 = 'Стройматериалы';

  readonly lightItem3 = 'Инструменты';

  readonly lightItem4 = 'Электрика';

  readonly lightItem5 = 'Интерьер и одежда';

  readonly aboutCompany = vuzov;

  readonly newPages: number[] = newPages;

  menuItems:string[] = upperCaseMenuItems

  isUpperCase = true;
  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase = !this.isUpperCase
  }
}

const menuItems = ['Каталог','Стройматериалы','Инструменты','Электрика','Интерьер и одежда']

const upperCaseMenuItems = menuItems.map(
  (item) => {
    return item.toUpperCase();
  }
)
