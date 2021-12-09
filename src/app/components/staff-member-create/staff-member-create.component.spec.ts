import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMemberCreateComponent } from './staff-member-create.component';

describe('StaffMemberCreateComponent', () => {
  let component: StaffMemberCreateComponent;
  let fixture: ComponentFixture<StaffMemberCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffMemberCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMemberCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
