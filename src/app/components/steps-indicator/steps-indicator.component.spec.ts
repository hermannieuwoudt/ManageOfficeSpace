import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsIndicatorComponent } from './steps-indicator.component';
import { IonicModule } from '@ionic/angular';

describe('StepsIndicatorComponent', () => {
  let component: StepsIndicatorComponent;
  let fixture: ComponentFixture<StepsIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule],
      declarations: [StepsIndicatorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsIndicatorComponent);
    component = fixture.componentInstance;
    component.currentStep = 5;
    component.stepsAmount = 7;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
