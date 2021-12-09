import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { StaffMember } from 'src/app/models/staff-memeber';
import { ListPopoverComponent } from '../list-popover/list-popover.component';

@Component({
  selector: 'app-staff-member',
  templateUrl: './staff-member.component.html',
  styleUrls: ['./staff-member.component.css'],
})
export class StaffMemberComponent implements OnInit {
  @Input() staffMember: StaffMember;
  constructor(private popoverController: PopoverController) {}

  ngOnInit(): void {}

  async presentPopover(ev: any) {
    ev.stopPropagation();
    const popover = await this.popoverController.create({
      component: ListPopoverComponent,
      event: ev,
      translucent: true,
      mode: 'md',
      cssClass: 'list-popover-component',
    });

    popover.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null && dataReturned.data) {
        if (dataReturned.data === 'edit') {
          console.log('edit');
        }
        if (dataReturned.data === 'delete') {
          console.log('delete');
        }
      }
    });

    return await popover.present();
  }
}
