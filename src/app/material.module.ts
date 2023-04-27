import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

const material = [
  MatTableModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSnackBarModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule
]


@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
