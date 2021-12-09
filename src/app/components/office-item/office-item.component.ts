import { Component, Input, OnInit } from '@angular/core';
import { OfficeDetailContainerComponent } from 'src/app/containers/office-detail-container/office-detail-container.component';
import { Office } from 'src/app/models/office';

@Component({
  selector: 'app-office-item',
  templateUrl: './office-item.component.html',
  styleUrls: ['./office-item.component.css'],
})
export class OfficeItemComponent implements OnInit {
  @Input() office: Office;
  nextComponent = OfficeDetailContainerComponent;
  colourStrip: string;
  constructor() {}

  ngOnInit(): void {
    this.colourStrip = 'assets/colour-strips/blue.svg';
  }
}
