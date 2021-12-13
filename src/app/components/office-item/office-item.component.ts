import { Component, Input, OnInit } from '@angular/core';
import { OfficeDetailContainerComponent } from 'src/app/containers/office-detail-container/office-detail-container.component';
import { Office } from 'src/app/models/office';
import { OfficeCreateComponent } from '../office-create/office-create.component';

@Component({
  selector: 'app-office-item',
  templateUrl: './office-item.component.html',
  styleUrls: ['./office-item.component.scss'],
})
export class OfficeItemComponent implements OnInit {
  @Input() office: Office;
  @Input() staffMembersCount: number;
  @Input() navigateToDetail: boolean;
  nextComponent: any;
  amount: number;
  showMoreDetail = false;
  officeNav: any = document.querySelector('#officeNav');

  constructor() {}

  ngOnInit(): void {
  }

  down(ev) {
    ev.stopPropagation();
    this.showMoreDetail = true;
  }

  up(ev) {
    ev.stopPropagation();
    this.showMoreDetail = false;
  }

  editOffice(ev) {
    ev.stopPropagation();
    this.officeNav.push(OfficeCreateComponent, {
      office: this.office,
      isEdit: true,
    });
  }

  navigateToDetails(ev) {
    if (this.navigateToDetail) {
      this.officeNav.push(OfficeDetailContainerComponent, {
        office: this.office,
      });
    }
  }
}
