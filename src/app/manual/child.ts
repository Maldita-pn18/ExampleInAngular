import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  // template:'<button class= "btn btn info" [class.active]="isActive">Submit </button>' ,
  // template:`<button class="btn btn info" [style.background] ="isActive? 'blue': 'red'">Submit </button>`,
//   template: '<button (click) = "onClick()">Submit1 </button> <button  on-click = "onClick()"> Submit2 </button> ',
template:`<p> Child Template: <br><br><input type="text" [(ngModel)]="cdata" (keyup)="onChange(cdata)"/> <br><br>From Parent Data: {{parentData}} </p> `,
  styles: ['.info {color:black}.active{background:blue}']

})
export class ChildComponent implements OnInit {
 @Input() parentData: string;
 @Output() childEvent = new EventEmitter;
  public cdata:String;

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    console.log('onclick event')
  }
  onChange(value:string){
    this.childEvent.emit(value);
  }

}
