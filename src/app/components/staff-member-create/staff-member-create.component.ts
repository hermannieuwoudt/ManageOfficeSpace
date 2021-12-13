import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ModalController, PopoverController } from '@ionic/angular';
import { StaffMember } from 'src/app/models/staff-member';

@Component({
  selector: 'app-staff-member-create',
  templateUrl: './staff-member-create.component.html',
  styleUrls: ['./staff-member-create.component.scss'],
})
export class StaffMemberCreateComponent implements OnInit {
  @Input() staffMember: StaffMember;
  @Input() isEdit: boolean;
  form: FormGroup;
  constructor(
    private popoverController: PopoverController,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    if (!this.isEdit) {
      this.form = this.formBuilder.group({
        firstName: new FormControl(
          null,
          Validators.compose([Validators.required])
        ),
        lastName: new FormControl(
          null,
          Validators.compose([Validators.required])
        ),
      });
    } else {
      this.form = this.formBuilder.group({
        firstName: new FormControl(
          this.staffMember.firstName,
          Validators.compose([Validators.required])
        ),
        lastName: new FormControl(
          this.staffMember.lastName,
          Validators.compose([Validators.required])
        ),
      });
    }
  }

  close() {
    this.popoverController.dismiss();
  }

  next() {
    this.popoverController.dismiss({
      firstName: this.form.get('firstName').value,
      lastName: this.form.get('lastName').value,
    });
  }
}
