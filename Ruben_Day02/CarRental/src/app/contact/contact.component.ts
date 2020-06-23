import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  info = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    subject: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    address: new FormGroup({
      street: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      state: new FormControl('',Validators.required),
      zip: new FormControl('',Validators.required)
    })

  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

    if(this.info.valid){
      var a = this.info.value;
      console.log(a)
   }

  }

}
