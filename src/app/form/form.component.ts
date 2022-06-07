import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
   @Input() objdata:any
   listarray=[{"name":'',"department":'',"semester":''}]

  constructor() { 

  }
  updatelist(obj:any){
    this.listarray.push(obj);
  }

   ngOnInit(): void {
  }

}
