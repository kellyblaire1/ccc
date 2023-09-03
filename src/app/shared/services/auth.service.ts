import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  prefix = 'users/';

  constructor(private http: HttpService,private storage: StorageService,) { }

  register(data:any): Observable<any>  {
    return this.http.post(this.prefix+'create-account',data);
  }

  login(data:any): Observable<any>  {
    return this.http.post(this.prefix+'login',data);
  }

  verify(data:any): Observable<any>  {
    return this.http.post(this.prefix+'verify',data);
  }

  recover(data:any): Observable<any>  {
    return this.http.post(this.prefix+'recover',data);
  }

  update(data:any): Observable<any>  {
    return this.http.post(this.prefix+'update',data);
  }

  resetPassword(data:any): Observable<any>  {
    return this.http.post(this.prefix+'reset-password',data);
  }

  changePassword(data:any): Observable<any>  {
    return this.http.post(this.prefix+'change-password',data);
  }

  resendCode(data:any): Observable<any>  {
    return this.http.post(this.prefix+'resend-code',data);
  }

  logout() {
    const log = new Observable(observer=>{
      this.storage.clear();
      observer.next(true);
    });

    return log;
  }
}
