import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeItemComponent } from './office-item.component';

describe('OfficeItemComponent', () => {
  let component: OfficeItemComponent;
  let fixture: ComponentFixture<OfficeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
