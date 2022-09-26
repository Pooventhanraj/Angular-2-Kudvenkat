import { Component, OnInit , Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  all: number = 10;
  @Input()
  male: number = 5;
  @Input()
  female: number = 5;

  selectedRadioButtonValue: string = 'All';

  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChange() {
    this.countRadioButtonSelectionChanged
        .emit(this.selectedRadioButtonValue);
;
}
}

