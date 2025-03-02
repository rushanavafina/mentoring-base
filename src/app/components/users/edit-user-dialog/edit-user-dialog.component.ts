import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { User } from "../../../interface/user-interface";

@Component ({
    selector: 'app-edit-user-dialog',
    templateUrl: './edit-user-dialog.component.html',
    styleUrls: ['./edit-user-dialog.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatDialogClose]
})
export class EditUserDialogComponent {
    readonly data = inject<{user: User}>(MAT_DIALOG_DATA);
    readonly dialogRef = inject(MatDialogRef<EditUserDialogComponent>);

    constructor() {
      console.log(this.data);
    }

  public form = new FormGroup({
   name: new FormControl(this.data.user.name, [Validators.required, Validators.minLength(2)]),
   email: new FormControl(this.data.user.email, [Validators.required, Validators.email]),
   website: new FormControl(this.data.user.website, [
     Validators.required, 
     Validators.minLength(3)
   ]),
   company: new FormGroup({
     name: new FormControl(this.data.user.company.name, [
     Validators.required, 
     Validators.minLength(2),
     ]),
   }),
 })

get userWithUpdatedFields() {
    return {
        id: this.data.user.id,
        ...this.form.value,
    };
}
}
