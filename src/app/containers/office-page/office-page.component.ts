import { Component, OnInit } from '@angular/core';
import { OfficeContainerComponent } from '../office-container/office-container.component';

@Component({
  selector: 'app-office-page',
  templateUrl: './office-page.component.html',
  styleUrls: ['./office-page.component.css'],
})
export class OfficePageComponent implements OnInit {
  rootPage = OfficeContainerComponent;

  constructor() {}

  ngOnInit(): void {}
}
