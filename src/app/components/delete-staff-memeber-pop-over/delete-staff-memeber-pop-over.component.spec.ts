import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStaffMemeberPopOverComponent } from './delete-staff-memeber-pop-over.component';

describe('DeleteStaffMemeberPopOverComponent', () => {
  let component: DeleteStaffMemeberPopOverComponent;
  let fixture: ComponentFixture<DeleteStaffMemeberPopOverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteStaffMemeberPopOverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStaffMemeberPopOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
