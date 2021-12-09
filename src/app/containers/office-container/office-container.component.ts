import { Component, OnInit } from '@angular/core';
import { OfficeCreateComponent } from 'src/app/components/office-create/office-create.component';
import { Office } from 'src/app/models/office';

@Component({
  selector: 'app-office-container',
  templateUrl: './office-container.component.html',
  styleUrls: ['./office-container.component.scss'],
})
export class OfficeContainerComponent implements OnInit {
  offices: Office[];
  nextComponent = OfficeCreateComponent;
  constructor() {}

  ngOnInit(): void {
    this.offices = [
      {
        id: 380,
        name: 'Specno',
        physicalAddress: '10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530',
        emailAddress: 'info@specno.com',
        phoneNumber: '082 364 9864',
        maximumCapacity: 25,
        colour: '#FB5607',
      },
      {
        id: 380,
        name: 'Company Name',
        physicalAddress: '10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530',
        emailAddress: 'info@specno.com',
        phoneNumber: '082 364 9864',
        maximumCapacity: 25,
        colour: '#FB5607',
      },
    ];
  }
}
