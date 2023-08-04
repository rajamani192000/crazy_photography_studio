import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'ngx-cannon-long-lens',
  templateUrl: './cannon-long-lens.component.html',
  styleUrls: ['./cannon-long-lens.component.scss']
})
export class CannonLongLensComponent implements OnInit {
  locationList: any = [{ value: "Dindigul City" }]
  ProductData: any = [{ value: 1, text: "Canon 55-250MM Lens" }]
  dayslist: any = [{ value: 1, text: "0-1 Day (Rs.400)", single: 400, dual: 400 }, { value: 2, text: "2-4 Days Rs.(350)", single: 350, dual: 350 }, { value: 3, text: "5-7 Days Rs.(300)", single: 300, dual: 300 }];
  bookForm: FormGroup;
  display: any;
  dateError: boolean = false;
  isSubmitted: boolean = false
  public min = new Date();
  advanceAmount: number;
  toDate: any;
  fromDate: any;
  productValue: any;
  ratePerDay: number;
  duration: number;
  singlePrice: any;
  dualPrice: any;
  constructor(private fb: FormBuilder,public location: Location) { }

  ngOnInit(): void {
    this.getData();
    this.bookForm = this.fb.group({
      totalDays: this.fb.control(null),
      location: this.fb.control(null),
      product: this.fb.control(null),
      date: this.fb.control(null),
      checkbox: this.fb.control(null),
    });
  }
  getData() {

  }

  changeTotalDays(event) {
    this.singlePrice = event[0].data.single;
    this.dualPrice = event[0].data.dual;
    this.calculateAmount();
  }

  rentPriceUpdateDate(event) {
    this.ratePerDay = 0;
    this.advanceAmount = 0;
    this.toDate = event[1];
    this.fromDate = event[0];
    this.calculateAmount();
  }
  rentPriceUpdateProduct(event) {
    this.productValue = event[0].value;
    this.calculateAmount();
  }
  calculateAmount() {
    this.productValue=this.productValue==undefined?1:this.productValue;
    this.duration=this.duration==undefined?1:this.duration;
    if (this.toDate == null) {
      this.dateError = true;
    } else {
      if (this.fromDate != null) {
        this.ratePerDay = this.productValue == 1 ? this.singlePrice : this.dualPrice;
        const oneDay = 24 * 60 * 60 * 1000; // Milliseconds in a day
        this.duration = Math.round((this.toDate - this.fromDate) / oneDay);
        this.ratePerDay = this.duration * this.ratePerDay;
        const advanceAmt = this.productValue == 1 ? 200 : 200;
        this.advanceAmount = advanceAmt * this.duration;
      }

      this.dateError = false;
    }
    if (this.fromDate == null) {
      this.ratePerDay = this.productValue == 1 ? this.singlePrice : this.dualPrice;
      const advanceAmt = this.productValue == 1 ? 200 : 200;
      this.advanceAmount = advanceAmt * this.duration;
    }
  }
  get fval(): {
    [key: string]: AbstractControl
  } {
    return this.bookForm.controls;
  }
  openModal() {
    this.isSubmitted = true;
    if (this.bookForm.valid && !this.dateError) {
      this.isSubmitted = false;
      this.display = "block";

    }
  }
  onCloseHandled() {
    this.display = "none";
  }

}