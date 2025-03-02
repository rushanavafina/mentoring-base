import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';

@Component({
  selector: 'app-button-create-user',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './button-create-user.component.html',
  styleUrl: './button-create-user.component.scss'
})
export class ButtonCreateUserComponent {

@Output()
  public createUser = new EventEmitter();

  readonly dialog = inject(MatDialog);

  private snackBar = inject(MatSnackBar);

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateUserFormComponent);
    dialogRef.afterClosed().subscribe((editResult) => {
      if (editResult) {
        this.createUser.emit(editResult);
        this.snackBar.open('Пользователь успешно отредактирован', 'ОК', {
          duration: 3000,
        });
      }
    });
  }
}
