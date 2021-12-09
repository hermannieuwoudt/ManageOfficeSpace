import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StaffMemberCreateComponent } from 'src/app/components/staff-member-create/staff-member-create.component';
import { Office } from 'src/app/models/office';
import { StaffMember } from 'src/app/models/staff-memeber';

@Component({
  selector: 'app-office-detail-container',
  templateUrl: './office-detail-container.component.html',
  styleUrls: ['./office-detail-container.component.css'],
})
export class OfficeDetailContainerComponent implements OnInit {
  @Input() office: Office;
  staffMembers: StaffMember[];
  constructor(private modalController: ModalController) {}

  ngOnInit(): void {
    this.staffMembers = [
      {
        id: 380,
        firstName: 'Daniel',
        lastName: 'Novitzkas',
        avatar: '',
      },
      {
        id: 393,
        firstName: 'Jacques',
        lastName: 'Jordaan',
        avatar: '',
      },
    ];
  }

  async addStaffMember() {
    const addStaffMemberModal = await this.modalController.create({
      id: 'AddStaffMemberModal',
      component: StaffMemberCreateComponent,
      cssClass: '',
    });
    return await addStaffMemberModal.present();
  }
}
