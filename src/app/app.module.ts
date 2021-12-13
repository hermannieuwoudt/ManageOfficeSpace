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
import { DeleteStaffMemberPopOverComponent } from './components/delete-staff-member-pop-over/delete-staff-member-pop-over.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffMemberCreateAvatarComponent } from './components/staff-member-create-avatar/staff-member-create-avatar.component';
import { StepsIndicatorComponent } from './components/steps-indicator/steps-indicator.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
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
    DeleteStaffMemberPopOverComponent,
    StaffMemberCreateAvatarComponent,
    StepsIndicatorComponent,
    SearchFilterPipe,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports: [FormsModule],
})
export class AppModule {}
