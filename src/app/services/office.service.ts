import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { StaffMemberCreateComponent } from '../components/staff-member-create/staff-member-create.component';
import { StaffMemeberCreateAvatarComponent } from '../components/staff-memeber-create-avatar/staff-memeber-create-avatar.component';
import { StaffMember } from '../models/staff-memeber';

@Injectable({
  providedIn: 'root',
})
export class StaffMemberService {
  constructor(private popoverController: PopoverController) {}

  async editCreateStaffMember(isEdit: boolean, staffMember: StaffMember) {
    const popover = await this.popoverController.create({
      component: StaffMemberCreateComponent,
      translucent: true,
      mode: 'md',
      componentProps: {
        staffMember,
        isEdit,
      },
    });

    popover.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null && dataReturned.data) {
        const newStaffMember = {
          ...staffMember,
          firstName: dataReturned.data.firstName,
          lastName: dataReturned.data.lastName,
        };
        this.editCreateStaffMemberAvatar(isEdit, newStaffMember);
      }
    });

    return await popover.present();
  }

  async editCreateStaffMemberAvatar(isEdit: boolean, staffMember: StaffMember) {
    const popover = await this.popoverController.create({
      component: StaffMemeberCreateAvatarComponent,
      translucent: true,
      mode: 'md',
      componentProps: {
        staffMember,
        isEdit,
      },
    });

    popover.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null && dataReturned.data) {
        if (dataReturned.data === 'back') {
          this.editCreateStaffMember(isEdit, staffMember);
        }
        if (dataReturned.data.avatar) {
          const newStaffMember = {
            ...staffMember,
            avatar: dataReturned.data.avatar
          };
        }
      }
    });

    return await popover.present();
  }
}
