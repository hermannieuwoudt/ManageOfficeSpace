import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { colours } from 'src/app/constants/colours';
import { Office } from 'src/app/models/office';

@Component({
  selector: 'app-office-create',
  templateUrl: './office-create.component.html',
  styleUrls: ['./office-create.component.scss'],
})
export class OfficeCreateComponent implements OnInit {
  @Input() office: Office;
  @Input() isEdit: boolean;
  colours = colours;
  selectedColour: string;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (!this.isEdit) {
      this.form = this.formBuilder.group({
        name: new FormControl(null, Validators.compose([Validators.required])),
        physicalAddress: new FormControl(
          null,
          Validators.compose([Validators.required])
        ),
        emailAddress: new FormControl(
          null,
          Validators.compose([Validators.required])
        ),
        phoneNumber: new FormControl(
          null,
          Validators.compose([Validators.required])
        ),
        maximumCapacity: new FormControl(
          null,
          Validators.compose([Validators.required])
        ),
      });
    } else {
      this.form = this.formBuilder.group({
        name: new FormControl(
          this.office.name,
          Validators.compose([Validators.required])
        ),
        physicalAddress: new FormControl(
          this.office.physicalAddress,
          Validators.compose([Validators.required])
        ),
        emailAddress: new FormControl(
          this.office.emailAddress,
          Validators.compose([Validators.required])
        ),
        phoneNumber: new FormControl(
          this.office.phoneNumber,
          Validators.compose([Validators.required])
        ),
        maximumCapacity: new FormControl(
          this.office.maximumCapacity,
          Validators.compose([Validators.required])
        ),
      });
      this.selectedColour = this.office.colour;
    }
  }

  selectColour(colour: string) {
    this.selectedColour = colour;
    // this.close({ avatar });
  }

  addOffice() {}

  updateOffice() {}
}
