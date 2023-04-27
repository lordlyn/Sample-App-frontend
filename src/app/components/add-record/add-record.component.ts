import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecordService } from 'src/app/services/record.service';
import { SnackBarComponent } from 'src/app/components/snack-bar/snack-bar.component';
import { ViewRecordComponent } from '../view-record/view-record.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss'],
})
export class AddRecordComponent implements OnInit {
  addRecordForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    notes: new FormControl(''),
  });

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private recordService: RecordService
  ) {}

  ngOnInit(): void {}

  addRecord() {
    let formData = this.addRecordForm.value;

    if (
      formData.firstName != '' &&
      formData.lastName != '' &&
      formData.address != ''
    ) {
      this.recordService.add(this.addRecordForm.value);
      this.openSnackBar(3);
    }
  }

  openViewDialog() {
    const dialogRef = this.dialog.open(ViewRecordComponent,{
      width: '900px'
    });
  }

  openSnackBar(duration: number) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: duration * 1000,
    });
  }
}
