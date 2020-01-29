import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  reactiveForm = this.fb.group({
    firstname: ['', Validators.required],
  });
  fullname:string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log('Submit')
  }

}
