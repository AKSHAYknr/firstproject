import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   @Input() namedata:any 
   @Input() departmentdata:any;
   @Input() semesterdata:any;
   @Input() addressdata:any

  constructor() { 

  }

  ngOnInit(): void {
  }

}
