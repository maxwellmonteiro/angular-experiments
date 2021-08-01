import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-textinput',
  templateUrl: './custom-textinput.component.html',
  styleUrls: ['./custom-textinput.component.css']
})
export class CustomTextinputComponent implements OnInit {
  
  changeSubscriber: (value: string) => void;
  fruit!: FormControl;

  constructor() { 
    this.changeSubscriber = this.handleChangeSubscriber;        
    this.fruit = new FormControl('');
  }

  ngOnInit(): void {

  }

  private handleChangeSubscriber(value: string) {       
    this.fruit.setValue(value);
    console.log(`triggered: ${value}`);
  }

}
