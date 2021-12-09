import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-list-popover',
  templateUrl: './list-popover.component.html',
  styleUrls: ['./list-popover.component.scss'],
})
export class ListPopoverComponent implements OnInit {
  constructor(private popoverController: PopoverController) {}

  ngOnInit() {}

  editStaffMember() {
    this.popoverController.dismiss('edit');
  }

  deleteStaffMember() {
    this.popoverController.dismiss('delete');
  }
}
