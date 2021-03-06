import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { avatars } from 'src/app/constants/avatars';
import { StaffMember } from 'src/app/models/staff-member';

@Component({
  selector: 'app-staff-member-create-avatar',
  templateUrl: './staff-member-create-avatar.component.html',
  styleUrls: ['./staff-member-create-avatar.component.scss'],
})
export class StaffMemberCreateAvatarComponent implements OnInit {
  @Input() staffMember: StaffMember;
  @Input() isEdit: boolean;
  avatars = avatars;
  selectedAvatar: string;
  constructor(private popoverController: PopoverController) {}

  ngOnInit(): void {
    if (!this.isEdit) {
    } else {
      this.selectedAvatar = this.staffMember.avatar;
    }
  }

  selectAvatar(avatar: string) {
    this.selectedAvatar = avatar;
    // this.close({ avatar });
  }

  back() {
    this.popoverController.dismiss('back');
  }

  close() {
    this.popoverController.dismiss();
  }

  addStaffMember() {
    this.popoverController.dismiss({ avatar: this.selectedAvatar });
  }
}
