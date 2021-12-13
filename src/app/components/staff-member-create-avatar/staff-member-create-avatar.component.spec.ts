import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMemberCreateAvatarComponent } from './staff-member-create-avatar.component';

describe('StaffMemeberCreateAvatarComponent', () => {
  let component: StaffMemberCreateAvatarComponent;
  let fixture: ComponentFixture<StaffMemberCreateAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffMemberCreateAvatarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMemberCreateAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
