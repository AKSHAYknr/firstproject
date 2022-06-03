import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproject';
  inputname='';
  inputdepartment='';
  inputsemester='';
  inputaddress='';
  transferdata(name:any,department:any,semester:any,address:any){
    this.inputname=name;
    this.inputdepartment=department;
    this.inputsemester=semester;
    this.inputaddress=address;
  }

}
