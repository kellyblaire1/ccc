import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../shared/services/users.service';
import { CommonService } from '../shared/services/common.service';
import { AuthService } from '../shared/services/auth.service';
import { StorageService } from '../shared/services/storage.service';

declare var window:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  form!:FormGroup;

  submitted:boolean = false;

  user!:any;

  showScrollBar = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private common: CommonService,
    private userServ: UsersService,
    private storage: StorageService,
  ) {
    this.form = fb.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required]],
    })
  }

  ngOnInit() {
    try {
      const user = this.storage.get('user');
  
      if(user) {
        this.user = user;
      }
      
    } catch (error) {
      
    }
  }

  ngAfterViewInit() {
    try {
      this.showScrollBar = true;    
    } catch (error) {
      alert('Error')
    }
  }

  login() {
    this.submitted = true;
    if (this.form.valid) {
      this.auth.login(this.form.value).subscribe((res: any) => {
        if (res.response === "success") {
          var user = res.data;
          this.userServ.saveUser(user);
          console.log('user', res)
          // this.common.route('account/user');
          window.location.assign("home");

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

  hideMenu() {
    const myOffcanvas = new window.bootstrap.Offcanvas(document.getElementById('menu'));
    myOffcanvas.hide();
  }

  hideModal() {
    const modal = new window.bootstrap.Modal(document.getElementById('loginModal'));
    modal.hide();
  }

  logout() {
    this.auth.logout().subscribe((res)=>{
      window.location.assign('/')
    });
  }
}
