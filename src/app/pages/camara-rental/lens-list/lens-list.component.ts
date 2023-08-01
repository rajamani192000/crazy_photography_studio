import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-lens-list',
  templateUrl: './lens-list.component.html',
  styleUrls: ['./lens-list.component.scss']
})
export class LensListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getData();
  }
getData(){

}
}
