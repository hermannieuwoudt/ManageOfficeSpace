import { Component, Input, OnInit } from '@angular/core';
import { OfficeDetailContainerComponent } from 'src/app/containers/office-detail-container/office-detail-container.component';
import { Office } from 'src/app/models/office';

@Component({
  selector: 'app-office-item',
  templateUrl: './office-item.component.html',
  styleUrls: ['./office-item.component.scss'],
})
export class OfficeItemComponent implements OnInit {
  @Input() office: Office;
  @Input() staffMembersCount: number;
  nextComponent = OfficeDetailContainerComponent;
  colourStrip: string;
  amount: number;
  showMoreDetail= false;

  constructor() {}

  ngOnInit(): void {
    this.colourStrip = 'assets/colour-strips/blue.svg';
  }

  down(ev) {
    ev.stopPropagation();
    this.showMoreDetail = true;
  }

  up(ev) {
    ev.stopPropagation();
    this.showMoreDetail = false;
  }
}
