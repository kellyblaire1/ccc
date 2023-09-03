import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../shared/services/common.service';
import { AuthService } from '../shared/services/auth.service';
import { UsersService } from '../shared/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

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
      password: ['',[Validators.required]],
    })
  }


  login() {
    this.submitted = true;
    if (this.form.valid) {
      this.auth.login(this.form.value).subscribe((res: any) => {
        if (res.response === "success") {
          var user = res.data;
          this.userServ.saveUser(user);
          console.log('user', res)
          // this.common.showToast('Logged in successfully!','success');
          // this.common.route('account/user');
          window.location.assign("home");

        } else {
          this.common.showToast('Something went wrong: ' + res.message,'danger');
        }
      },
        (error: any) => {
          this.common.showToast('Check your connection.','danger');
        },
        () => {
          this.submitted = false;
        });
    }
    else {
      this.common.showToast('Fill all required fields.','danger');
    }
  }
}
