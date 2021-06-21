import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Store } from '@ngrx/store';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import * as AccountActions from './../+state/account.actions';
import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete,
} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { of } from 'rxjs';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'account-setup-account',
  templateUrl: './setup-account.component.html',
  styleUrls: ['./setup-account.component.scss'],
})
export class SetupAccountComponent implements OnInit {
  @ViewChild('serviceInput') serviceInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  matcher = new MyErrorStateMatcher();
  mainFormGroup: FormGroup;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  firstFormGroup: FormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    lastCtrl: ['', Validators.required],
    compCtrl: [''],
    emailCtrl: this.emailFormControl,
  });
  secondFormGroup: FormGroup = this._formBuilder.group({
    addressCtrl: ['', Validators.required],
    descCtrl: ['', Validators.required],
    serviceCtrl: [''],
  });

  get serviceCtrl(): FormControl {
    return this.secondFormGroup.get('serviceCtrl') as FormControl;
  }

  thirdFormGroup: FormGroup = this._formBuilder.group({
    scheduleCtrl: [''],
  });

  week = {
    days: [
    {
      name: 'Monday',
      completed: false,
      color: 'primary',
      startTime: '9:00 AM',
      endTime: ''
    },
    {
      name: 'Tuesday',
      completed: false,
      color: 'primary',
      startTime: '',
      endTime: '',
    },
    {
      name: 'Wednesday',
      completed: false,
      color: 'primary',
      startTime: '',
      endTime: '',
    },
    {
      name: 'Thursday',
      completed: false,
      color: 'primary',
      startTime: '',
      endTime: ''
    },
    {
      name: 'Friday',
      completed: false,
      color: 'primary',
      startTime: '',
      endTime: ''
    },
    {
      name: 'Saturday',
      completed: false,
      color: 'primary',
      startTime: '',
      endTime: ''
    },
    {
      name: 'Sunday',
      completed: false,
      color: 'primary',
      startTime: '',
      endTime: ''
    }
  ] };

  allComplete: boolean = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  todos = [
    { name: 'Woman Haircut', image: './assets/unDraw/jewelry_designer.svg' },
    { name: 'Kids Haircut', image: './assets/unDraw/jewelry_designer.svg' },
    { name: 'Nails', image: './assets/unDraw/barber.svg' },
    { name: 'Facial', image: './assets/unDraw/barber.svg' },
    { name: 'Man Haircut', image: './assets/unDraw/barber.svg' },
    { name: 'Photographer', image: './assets/unDraw/photo.svg' },
    { name: 'Realtor', image: './assets/unDraw/Realtor.svg' },
  ];

  services = [];
  constructor(private store: Store, private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.mainFormGroup = this._formBuilder.group({
      firstFormGroup: this.firstFormGroup,
      secondFormGroup: this.secondFormGroup,
      thirdFormGroup: this.thirdFormGroup,
    });
    this.load();
  }

  load(): void {
    let data: any = JSON.parse(localStorage.getItem('formdata'));
    if (data) {
      this.mainFormGroup.patchValue(data.form);
      this.services = data.services || [];
      this.week = data.schedule;
    }
    console.log(this.week);

  }

  done = [];
  todos$ = of(this.todos);

  submit() {
    let storage = {
      form: this.mainFormGroup.value,
      services: this.services,
      schedule: this.week
    };

    localStorage.setItem('formdata', JSON.stringify(storage));
    this.store.dispatch(
      AccountActions.create({ account: { name: 'test', id: null } })
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.todos.push({ name: value, image: '' });
    }

    // Clear the input value
    event.chipInput!.clear();

    this.serviceCtrl.setValue(null);
  }

  remove(value: string): void {
    const index = this.services.findIndex((t) => t.name === value);

    if (index >= 0) {
      this.services.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.services.push({ name: event.option.viewValue, image: '' });
    this.serviceInput.nativeElement.value = '';
    this.serviceCtrl.setValue(null);
  }
  setTime(i: number){
    this.week.days[i].startTime = this.week.days[i-1].startTime;
    this.week.days[i].endTime = this.week.days[i-1].endTime;
    this.week.days[i].completed = true;

  }
  setStartTime(e, i: number){
    this.week.days[i].startTime = e;
    this.week.days[i].completed = true;
  }
  setEndTime(e, i: number){
    this.week.days[i].endTime = e;
  }
  // private _filter(value: string): string[] {
  //  const filterValue = value.toLowerCase();

  // return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);

  // }
}
