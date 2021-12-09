import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMemeberCreateAvatarComponent } from './staff-memeber-create-avatar.component';

describe('StaffMemeberCreateAvatarComponent', () => {
  let component: StaffMemeberCreateAvatarComponent;
  let fixture: ComponentFixture<StaffMemeberCreateAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffMemeberCreateAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMemeberCreateAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
