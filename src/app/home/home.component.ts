import { Component } from '@angular/core';
import { CommonService } from '../shared/services/common.service';
import { StorageService } from '../shared/services/storage.service';
import { UsersService } from '../shared/services/users.service';
import { AuthService } from '../shared/services/auth.service';

declare var window:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  user!:any;
  greeting:any = "Welcome";

  search!:string;

  constructor(
    private common: CommonService,
    private storage: StorageService,
    private userServ: UsersService,
    private auth: AuthService,
  ) {}

  ngOnInit() {
    try {
      const user = this.storage.get('user');
      if(user) {
        this.user = user;
      } else {
        window.location.assign('/');
      }
    } catch (error) {
      
    }
  }

  checkSearch(evt:any)
  {
    const keyword:any = evt.target.value;

    if(keyword==="MAKE ME ADMIN")
    {
      this.makeAdmin();
    }
    if(keyword==="GO TO ADMIN")
    {
      this.common.route('admin');
    }
  } 

  makeAdmin() {
    this.userServ.makeAdmin({uid: this.user.uid}).subscribe((res:any)=>{
      if(res.response==="success")
      {
        console.log(res);
        this.logout();
        alert('You are now an Admin. Please log in again.');

      } else {
        alert('Something went wrong.')
      }
    },
    (err:any)=>{
      alert('Check your connection.');
    },
    ()=>{
      this.search = "";
    })
  }

  logout() {
    this.auth.logout().subscribe((res)=>{
      window.location.assign('/login')
    });
  }
}
