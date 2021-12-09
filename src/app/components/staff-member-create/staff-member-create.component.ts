import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-staff-member-create',
  templateUrl: './staff-member-create.component.html',
  styleUrls: ['./staff-member-create.component.css'],
})
export class StaffMemberCreateComponent implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit(): void {}

  close() {
    this.modalController.dismiss();
  }
}
