import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { User } from "../../../interface/user-interface";
import {MatDialog, MatDialogModule,} from '@angular/material/dialog';
import { EditUserDialogComponent } from "../edit-user-dialog/edit-user-dialog.component";
import { MatButton } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { DeleteUserDialogComponent } from "../delete-user-dialog/delete-user-dialog.component";
import {MatSnackBar, MatSnackBarModule,} from '@angular/material/snack-bar';

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    standalone: true,
    imports: [MatDialogModule, MatSnackBarModule]
})
export class UserCardComponent {
  @Input()
  user!: User;

  @Output()
  deleteUser = new EventEmitter<number>();

  @Output ()
  editUser = new EventEmitter<User>();

  readonly dialog = inject(MatDialog);

  private snackBar = inject(MatSnackBar);
  
  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      data: {user: this.user},
    });

    dialogRef.afterClosed().subscribe((result: boolean | boolean) => {
      if (result) {
        this.deleteUser.emit(this.user.id);
        this.snackBar.open('Пользователь успешно удален', 'ОК', {
          duration: 3000,
        });
      }
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { user: this.user },
    });

    dialogRef.afterClosed().subscribe((editResult) => {
      if (editResult) {
        this.editUser.emit(editResult);
        this.snackBar.open('Пользователь успешно отредактирован', 'ОК', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    });
  }
}
