import { Component, OnInit } from '@angular/core';
import { OfficeCreateComponent } from 'src/app/components/office-create/office-create.component';
import { OfficeApiService } from 'src/app/core/api-services/office-api.service copy';
import { Office } from 'src/app/models/office';

@Component({
  selector: 'app-office-container',
  templateUrl: './office-container.component.html',
  styleUrls: ['./office-container.component.scss'],
})
export class OfficeContainerComponent implements OnInit {
  offices: Office[];
  nextComponent = OfficeCreateComponent;
  constructor(private officeApiService: OfficeApiService) {}

  ngOnInit(): void {
    this.officeApiService
      .index()
      .subscribe((offices) => (this.offices = offices));
  }
}
