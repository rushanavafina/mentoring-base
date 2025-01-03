import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';

  readonly headerItem1 = 'Главная';

  readonly headerItem2 = 'О компании';

  readonly headerItem3 ='Каталог';


  readonly lightItem1 = 'Каталог';

  readonly lightItem2 = 'Стройматериалы';

  readonly lightItem3 = 'Инструменты';

  readonly lightItem4 = 'Электрика';

  readonly lightItem5 = 'Интерьер и одежда';
}
