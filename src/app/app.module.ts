import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OfficeCreateComponent } from './components/office-create/office-create.component';
import { StaffMemberComponent } from './components/staff-member/staff-member.component';
import { StaffMemberCreateComponent } from './components/staff-member-create/staff-member-create.component';
import { OfficeItemComponent } from './components/office-item/office-item.component';
import { OfficeContainerComponent } from './containers/office-container/office-container.component';
import { OfficeDetailContainerComponent } from './containers/office-detail-container/office-detail-container.component';
import { OfficePageComponent } from './containers/office-page/office-page.component';
import { ListPopoverComponent } from './components/list-popover/list-popover.component';
import { DeleteStaffMemeberPopOverComponent } from './components/delete-staff-memeber-pop-over/delete-staff-memeber-pop-over.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffMemeberCreateAvatarComponent } from './components/staff-memeber-create-avatar/staff-memeber-create-avatar.component';
import { StepsIndicatorComponent } from './components/steps-indicator/steps-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    OfficeCreateComponent,
    StaffMemberComponent,
    StaffMemberCreateComponent,
    OfficeItemComponent,
    OfficeContainerComponent,
    OfficeDetailContainerComponent,
    OfficePageComponent,
    ListPopoverComponent,
    DeleteStaffMemeberPopOverComponent,
    StaffMemeberCreateAvatarComponent,
    StepsIndicatorComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports: [FormsModule],
})
export class AppModule {}
