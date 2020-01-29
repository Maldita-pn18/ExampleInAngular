import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {
  fullname:string;

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.fullname)
  }

}
