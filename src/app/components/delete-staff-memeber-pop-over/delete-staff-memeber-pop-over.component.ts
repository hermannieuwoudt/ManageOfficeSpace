import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-delete-staff-memeber-pop-over',
  templateUrl: './delete-staff-memeber-pop-over.component.html',
  styleUrls: ['./delete-staff-memeber-pop-over.component.scss'],
})
export class DeleteStaffMemeberPopOverComponent implements OnInit {
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
