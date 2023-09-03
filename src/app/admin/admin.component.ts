import { Component } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { StorageService } from '../shared/services/storage.service';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  users:any = [];

  user!:any;

  keyword!:string;

  constructor(
    private userServ: UsersService,
    private storage: StorageService,
    private common: CommonService,
  ) {}

  ngOnInit() {
    this.user = this.storage.get('user');
    this.users = this.storage.get('users');
    this.fetchUsers();

    // if(this.user && this.user.account!=="1") {
    //   // this.common.route('home');
    //   alert(this.user.account)
    // } else {
    //   alert("You are admin")
    // }
  }

  fetchUsers() {
    this.userServ.users().subscribe((res:any)=>{
      console.log(res);
      if(res.count > 0) {
        console.log(res);
        this.userServ.saveUsers(res.data);
        this.users = res.data;
      } else {
        console.log(res);
      }
    },
    (err:any)=>{    
      console.log(err);
    },
    ()=>{});
  }

  deactivate(uid:number, evt:any) {
    const checked:any = evt.target.checked;

    if(checked) {
      this.block(uid);
    } else {
      this.unblock(uid);     
    }
  }

  deleteItem(uid:number) {
    if(confirm('Are you sure you want to delete this user?')) {
      this.userServ.delete({uid: uid}).subscribe((res:any)=>{
        if(res.response==="success") {
          alert('Deleted!');
        } else {
          alert(res.message);
        }
      },
      (err:any)=>{
        alert('Check your connection.');
      },
      ()=>{
        // on complete
      });
    }
  }

  block(uid:number) {
    if(confirm('Are you sure you want to block this user?')) {
      this.userServ.block({uid: uid}).subscribe((res:any)=>{
        if(res.response==="success") {
          alert('User blocked!');
        } else {
          alert(res.message);
        }
      },
      (err:any)=>{
        alert('Check your connection.');
      },
      ()=>{
        // on complete
      });
    }
  }

  unblock(uid:number) {
    if(confirm('Are you sure you want to unblock this user?')) {
      this.userServ.unblock({uid: uid}).subscribe((res:any)=>{
        if(res.response==="success") {
          alert('User unblocked!');
        } else {
          alert(res.message);
        }
      },
      (err:any)=>{
        alert('Check your connection.');
      },
      ()=>{
        // on complete
      });
    }
  }

  makeAdmin(uid:number) {
    this.userServ.makeAdmin({uid: uid}).subscribe((res:any)=>{
      if(res.response==="success")
      {
        // console.log(res);
        alert('This user is now an Admin.');
        window.location.reload();

      } else {
        alert('Something went wrong.')
      }
    },
    (err:any)=>{
      alert('Check your connection.');
    },
    ()=>{
      // this.search = "";
    })
  }

  removeAdmin(uid:number) {
    this.userServ.removeAdmin({uid: uid}).subscribe((res:any)=>{
      if(res.response==="success")
      {
        console.log(res);
        alert('You have removed this admin.');
        window.location.reload();

      } else {
        alert('Something went wrong.')
      }
    },
    (err:any)=>{
      alert('Check your connection.');
    },
    ()=>{
    })
  }
}
