import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-delete-staff-member-pop-over',
  templateUrl: './delete-staff-member-pop-over.component.html',
  styleUrls: ['./delete-staff-member-pop-over.component.scss'],
})
export class DeleteStaffMemberPopOverComponent implements OnInit {
  constructor(private popoverController: PopoverController) {}

  ngOnInit(): void {}

  keepStaffMember() {
    this.popoverController.dismiss('keep');
  }

  deleteStaffMember() {
    this.popoverController.dismiss('delete');
  }

  back() {
    this.popoverController.dismiss('back');
  }
}
