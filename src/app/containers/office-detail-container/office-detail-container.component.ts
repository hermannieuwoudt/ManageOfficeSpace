import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { StaffMemberCreateComponent } from 'src/app/components/staff-member-create/staff-member-create.component';
import { StaffMemberApiService } from 'src/app/core/api-services/staff-member-api.service';
import { Office } from 'src/app/models/office';
import { StaffMember } from 'src/app/models/staff-memeber';
import { StaffMemberService } from 'src/app/services/staff-memeber.service';

@Component({
  selector: 'app-office-detail-container',
  templateUrl: './office-detail-container.component.html',
  styleUrls: ['./office-detail-container.component.css'],
})
export class OfficeDetailContainerComponent implements OnInit {
  @Input() office: Office;
  staffMembers: StaffMember[];
  constructor(
    private staffMemberService: StaffMemberService,
    private staffMemberApiService: StaffMemberApiService
  ) {}

  ngOnInit(): void {
    this.staffMemberApiService
      .index()
      .subscribe(
        (staffMembers) =>
          (this.staffMembers = staffMembers.filter(
            (staffMember) => staffMember.officeId === this.office.id
          ))
      );
  }

  addStaffMember() {
    this.staffMemberService.editCreateStaffMember(false, null);
  }
}
