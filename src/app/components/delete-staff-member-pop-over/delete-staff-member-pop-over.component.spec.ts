import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStaffMemberPopOverComponent } from './delete-staff-member-pop-over.component';

describe('DeleteStaffMemeberPopOverComponent', () => {
  let component: DeleteStaffMemberPopOverComponent;
  let fixture: ComponentFixture<DeleteStaffMemberPopOverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteStaffMemberPopOverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStaffMemberPopOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
