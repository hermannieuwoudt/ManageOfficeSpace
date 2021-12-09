import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeDetailContainerComponent } from './office-detail-container.component';

describe('OfficeDetailContainerComponent', () => {
  let component: OfficeDetailContainerComponent;
  let fixture: ComponentFixture<OfficeDetailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeDetailContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
