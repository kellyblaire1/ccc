import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form!:FormGroup;

  submitted:boolean = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private common: CommonService
  ) {
    this.form = fb.group({
      account: ['2',[Validators.required]],
      fname: ['',[Validators.required]],
      lname: ['',[Validators.required]],
      phone: [''],
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],
    })
  }

  register() {

    if(this.form.valid) {
      this.submitted = true;

      this.auth.register(this.form.value).subscribe((res:any)=>{
        if(res.response==="success") {
          alert('Account created successfully. Log In now!');
          this.common.route('login');
        } else {
          alert(res.message);
        }
      },
      (err:any) => {
        alert('Check your connection.');
      },
      () => {
        this.submitted = false;
      })
    } else {
      alert('Fill all required fields.');
    }
  }

}
