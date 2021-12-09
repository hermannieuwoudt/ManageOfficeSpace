import { Component, Input, OnInit } from '@angular/core';
import { Office } from 'src/app/models/office';

@Component({
  selector: 'app-office-item',
  templateUrl: './office-item.component.html',
  styleUrls: ['./office-item.component.css'],
})
export class OfficeItemComponent implements OnInit {
  @Input() office: Office;
  constructor() {}

  ngOnInit(): void {}
}
