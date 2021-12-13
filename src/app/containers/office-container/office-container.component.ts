import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OfficeCreateComponent } from 'src/app/components/office-create/office-create.component';
import { OfficeApiService } from 'src/app/core/api-services/office-api.service copy';
import { StaffMemberApiService } from 'src/app/core/api-services/staff-member-api.service';
import { Office } from 'src/app/models/office';
import { StaffMember } from 'src/app/models/staff-member';

@Component({
  selector: 'app-office-container',
  templateUrl: './office-container.component.html',
  styleUrls: ['./office-container.component.scss'],
})
export class OfficeContainerComponent implements OnInit {
  offices: Office[];
  staffMembers: StaffMember[];
  offices$: Observable<Office[]>;
  nextComponent = OfficeCreateComponent;
  constructor(
    private officeApiService: OfficeApiService,
    private staffMemberApiService: StaffMemberApiService
  ) {}

  ngOnInit(): void {
    this.offices$ = this.officeApiService.index();
    this.staffMemberApiService
      .index()
      .subscribe((staffMembers) => (this.staffMembers = staffMembers));
  }

  getStaffMembersCount(office) {
    if (this.staffMembers) {
      return this.staffMembers.filter(
        (staffMember) => staffMember.officeId === office.id
      ).length;
    }
  }
}
