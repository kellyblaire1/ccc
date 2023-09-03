import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../shared/services/common.service';
import { AuthService } from '../shared/services/auth.service';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent {

  form!:FormGroup;

  submitted:boolean = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private common: CommonService,
    private ar: ActivatedRoute,
    private userServ: UsersService,
  ) {
    this.form = fb.group({
      username: ['',[Validators.required]],
    })
  }


  recover() {
    this.submitted = true;
    if (this.form.valid) {
      this.auth.recover(this.form.value).subscribe((res: any) => {
        if (res.response === "success") {
          alert('Check your email for your reset link.');
          window.location.assign("login");

        } else {
          alert('Something went wrong: ' + res.message);
        }
      },
        (error: any) => {
          alert('Check your connection.')
        },
        () => {
          this.submitted = false;
        });
    }
    else {
      alert('Fill all required fields.');
    }
  }
}
