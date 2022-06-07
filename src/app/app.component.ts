import { Component,ViewChild,} from '@angular/core';
import { FormComponent } from './form/form.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(FormComponent) viewdata !:FormComponent;
  title = 'firstproject';
  
 
  inputobj={"name":"","semester":"","department":""};
  transferdata(inputobj:any)
  {
    this.viewdata.updatelist(this.inputobj);
  }

}
