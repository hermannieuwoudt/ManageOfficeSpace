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
    ListPopoverComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
