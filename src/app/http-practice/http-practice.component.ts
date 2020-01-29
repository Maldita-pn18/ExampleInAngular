import { Component, OnInit } from '@angular/core';;
import { UserService } from '../user.service';
import { AppComponent } from '../travellers';
@Component({
  selector: 'app-http-practice',
  templateUrl: './http-practice.component.html',
  styleUrls: ['./http-practice.component.css']
})
export class HttpPracticeComponent implements OnInit {
  user: AppComponent[];

  constructor(private appservice : UserService) { }

  ngOnInit() {
   return this.appservice.getUsers().subscribe(data => this.user= data);
  }

}
