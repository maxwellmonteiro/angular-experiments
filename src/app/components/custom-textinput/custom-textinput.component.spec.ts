import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTextinputComponent } from './custom-textinput.component';

describe('CustomTextinputComponent', () => {
  let component: CustomTextinputComponent;
  let fixture: ComponentFixture<CustomTextinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTextinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTextinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
