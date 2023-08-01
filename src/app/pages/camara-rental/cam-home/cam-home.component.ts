import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-cam-home',
  templateUrl: './cam-home.component.html',
  styleUrls: ['./cam-home.component.scss']
})
export class CamHomeComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

    this.getdata();
  }

getdata(){

}
}
