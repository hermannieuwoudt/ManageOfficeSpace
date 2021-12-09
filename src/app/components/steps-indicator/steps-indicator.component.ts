import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-steps-indicator',
  templateUrl: './steps-indicator.component.html',
  styleUrls: ['./steps-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepsIndicatorComponent implements OnInit {
  @Input() stepsAmount: number;
  @Input() currentStep: number;
  @Input() currentStepDone: boolean;
  isLastStep = false;
  stepsToDo: number;
  arrayDone = new Array(1);
  arrayToDo = new Array(1);

  constructor() {}
  ngOnInit() {
    this.stepsToDo = this.stepsAmount - this.currentStep;
    this.arrayDone = new Array(this.currentStep - 1);
    this.arrayToDo = new Array(this.stepsToDo);
    if (this.stepsAmount - this.currentStep === 0) {
      this.isLastStep = true;
    }
  }
}
