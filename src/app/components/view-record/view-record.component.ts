import { Component, OnInit } from '@angular/core';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-view-record',
  templateUrl: './view-record.component.html',
  styleUrls: ['./view-record.component.scss'],
})
export class ViewRecordComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'address', 'notes'];
  dataSource: any;

  constructor(private recordService: RecordService) {}

  ngOnInit() {
    this.recordService.get().subscribe((res) => {
      this.dataSource = res;
    });
  }
}
