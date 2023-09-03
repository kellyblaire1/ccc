import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  prefix = 'users/';

  constructor(private http: HttpService,private storage: StorageService,) { }

  // all users for backoffice
  users()  {
    return this.http.post(this.prefix+'all',null);
  }

  saveUsers(data:any) {
    if(data) {
      return this.storage.set('users',data);
    }

    return false;
  }

  removeUsers(){
    return this.storage.remove('users');
  }
  
  getUsers(): Observable<any> {
    const users = new Observable(observer=>{
      var data = this.storage.get('users');

      if(data) {
        observer.next(data);
      }
    });

    return users;
  }

  // single user
  
  user(username: any)  {
    this.http.post(this.prefix+'info',{username: username}).subscribe(res=>{
      if(res.count > 0) {
        this.saveUser(res.data);
      }
    });
  }

  saveUser(data:any) {
    if(data) {
      return this.storage.set('user',data);
    }

    return false;
  }

  removeUser(){
    return this.storage.remove('user');
  }
  
  getUser(): Observable<any> {
    const users = new Observable(observer=>{
      var data = this.storage.get('user');

      if(data) {
        observer.next(data);
      }
    });

    return users;
  }
  
  update(data:any):Observable<any> {
    return this.http.post(this.prefix+'update',data);
  }  
  
  block(data:any):Observable<any> {
    return this.http.post(this.prefix+'block',data);
  } 
  
  unblock(data:any):Observable<any> {
    return this.http.post(this.prefix+'unblock',data);
  } 
  
  makeAdmin(data:any):Observable<any> {
    return this.http.post(this.prefix+'make-admin',data);
  } 
  
  removeAdmin(data:any):Observable<any> {
    return this.http.post(this.prefix+'remove-admin',data);
  } 
  
  delete(data:any):Observable<any> {
    return this.http.post(this.prefix+'delete',data);
  } 
}
