import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { StaffMemberCreateComponent } from '../components/staff-member-create/staff-member-create.component';
import { StaffMemberCreateAvatarComponent } from '../components/staff-member-create-avatar/staff-member-create-avatar.component';
import { StaffMemberApiService } from '../core/api-services/staff-member-api.service';
import { Office } from '../models/office';
import { StaffMember } from '../models/staff-member';

@Injectable({
  providedIn: 'root',
})
export class StaffMemberService {
  constructor(
    private popoverController: PopoverController,
    private staffMemberApiService: StaffMemberApiService
  ) {}

  createStaffMember(staffMember: StaffMember) {
    this.staffMemberApiService.create(staffMember);
  }

  updateStaffMember(staffMember: StaffMember) {
    this.staffMemberApiService.update(staffMember);
  }

  deleteStaffMember(staffMember: StaffMember) {
    this.staffMemberApiService.destroy(staffMember.id);
  }

  async editCreateStaffMember(
    isEdit: boolean,
    staffMember: StaffMember,
    officeId: string
  ) {
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
        this.editCreateStaffMemberAvatar(isEdit, newStaffMember, officeId);
      }
    });

    return await popover.present();
  }

  async editCreateStaffMemberAvatar(
    isEdit: boolean,
    staffMember: StaffMember,
    officeId: string
  ) {
    const popover = await this.popoverController.create({
      component: StaffMemberCreateAvatarComponent,
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
          this.editCreateStaffMember(isEdit, staffMember, officeId);
        }
        if (dataReturned.data.avatar) {
          const newStaffMember = {
            ...staffMember,
            avatar: dataReturned.data.avatar,
            officeId,
          };
          if (isEdit) {
            this.updateStaffMember(newStaffMember);
          } else {
            this.createStaffMember(newStaffMember);
          }
        }
      }
    });

    return await popover.present();
  }
}
