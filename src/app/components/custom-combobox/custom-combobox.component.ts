import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-custom-combobox',
  templateUrl: './custom-combobox.component.html',
  styleUrls: ['./custom-combobox.component.css']
})
export class CustomComboboxComponent implements OnInit {

  fruits: string[] = ['apple', 'orange', 'watermelon'];

  onChange: Subject<string>;

  constructor() {    
    this.onChange = new Subject();
  }

  ngOnInit(): void {

  }

  handleChange(e: any) {
    this.onChange.next(e.value);
  }

}
