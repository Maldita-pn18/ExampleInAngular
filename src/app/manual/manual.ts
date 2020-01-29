import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual',
  // template:'<button class= "btn btn info" [class.active]="isActive">Submit </button>' ,
  // template:`<button class="btn btn info" [style.background] ="isActive? 'blue': 'red'">Submit </button>`,
  // template: '<button (click) = "onClick()">Submit1 </button> <button  on-click = "onClick()"> Submit2 </button> ',
  template:`<p> Parent Template </p> <input type="text" [(ngModel)]="pdata"/><p>Data from Child : {{cdata}}<hr/>
  <app-child (childEvent)="cdata=$event" [parentData]="pdata"></app-child>`,
  styles: ['.info {color:black}.active{background:blue}']
})
export class ManualComponent implements OnInit {
  isActive = false;
  public pdata:String;
  public cdata:String;

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    console.log('onclick event')
  }

}
