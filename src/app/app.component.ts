import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Data {
  fName: string;
  lName: string;
  email: string;
  gender: any;
  mobileNo: string;
  address:string,
        zip: string,
        street: string,
        city: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularForms';

  data: Data[] = [
    {
      fName: 'Nirmit',
      lName: 'Sawlekar',
      email: 'nirmitr@gmail.com',
      gender: 'male',
      mobileNo: '78878878731',
        address:"xyz",
        zip: "455422",
        street: "Dindoli",
        city: "Surat"
      }
    
  ];

  @ViewChild('myForm')
  formData!: NgForm;

  id:any;

  numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  submit() {
  //  if(this.formData.invalid){
  //   return  
  // }
  //   else{

  //   }
  //   this.formData.reset();
   }
 
  

  
  

  showData(formData: any) {
       console.log(this.data.push(this.formData.value));
     if(this.formData.invalid){
    return  
  }
      if(this.id > -1){
        this.data[this.id] = this.formData.value
        this.id = -1;
      }else{
        // console.log(this.data.push(this.formData.value));
      }
      this.formData.reset();
    }
   
  

  

  deleteData(formData: any) {
    this.data.splice(-1, 1);
  }

  editData(data: any) {
    console.log('data :>> ', data);
    this.formData.form.patchValue(data);
    // if(this.id > -1){
    //   this.data[this.id] = this.formData.value
    //   this.id = -1;
    // }else{
    //   // console.log(this.data.push(this.formData.value));
    // }
  }


}
