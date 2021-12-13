import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { StaffMember } from 'src/app/models/staff-member';
import { StaffMemberService } from 'src/app/services/staff-member.service';
import { DeleteStaffMemberPopOverComponent } from '../delete-staff-member-pop-over/delete-staff-member-pop-over.component';
import { ListPopoverComponent } from '../list-popover/list-popover.component';
import { StaffMemberCreateComponent } from '../staff-member-create/staff-member-create.component';

@Component({
  selector: 'app-staff-member',
  templateUrl: './staff-member.component.html',
  styleUrls: ['./staff-member.component.scss'],
})
export class StaffMemberComponent implements OnInit {
  @Input() staffMember: StaffMember;
  constructor(
    private popoverController: PopoverController,
    private staffMemberService: StaffMemberService
  ) {}

  ngOnInit(): void {}

  async presentPopover() {
    const popover = await this.popoverController.create({
      component: ListPopoverComponent,
      translucent: true,
      mode: 'md',
    });

    popover.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null && dataReturned.data) {
        if (dataReturned.data === 'edit') {
          this.editStaffMember();
        }
        if (dataReturned.data === 'delete') {
          this.deleteStaffMember();
        }
      }
    });

    return await popover.present();
  }

  async deleteStaffMember() {
    const popover = await this.popoverController.create({
      component: DeleteStaffMemberPopOverComponent,
      translucent: true,
      mode: 'md',
    });

    popover.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null && dataReturned.data) {
        if (dataReturned.data === 'keep') {
        }
        if (dataReturned.data === 'delete') {
          this.staffMemberService.deleteStaffMember(this.staffMember);
        }
        if (dataReturned.data === 'back') {
          this.presentPopover();
        }
      }
    });

    return await popover.present();
  }

  editStaffMember() {
    this.staffMemberService.editCreateStaffMember(
      true,
      this.staffMember,
      this.staffMember.officeId
    );
  }
}
