import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { StaffMemberCreateComponent } from 'src/app/components/staff-member-create/staff-member-create.component';
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
  constructor(private staffMemberService: StaffMemberService) {}

  ngOnInit(): void {
    this.staffMembers = [
      {
        id: 380,
        firstName: 'Daniel',
        lastName: 'Novitzkas',
        avatar: '/assets/avatars/Avatar1.svg',
      },
      {
        id: 393,
        firstName: 'Jacques',
        lastName: 'Jordaan',
        avatar: '/assets/avatars/Avatar2.svg',
      },
    ];
  }

  addStaffMember() {
    this.staffMemberService.editCreateStaffMember(false, null);
  }
}
