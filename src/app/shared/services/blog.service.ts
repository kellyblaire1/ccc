import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  prefix = 'blogs/';

  constructor(private http: HttpService, private storage: StorageService,) { }

  blogs(): Observable<any>  {
    return this.http.post(this.prefix+'all',null);
  }

  saveBlogs(data:any) {
    if(data) {
      return this.storage.set('blogs',data);
    }
    return false;
  }

  removeBlogs(){
    return this.storage.remove('blogs');
  }
  
  getBlogs(): Observable<any> {
    const blogs = new Observable(observer=>{
      var data = this.storage.get('blogs');

      if(data) {
        observer.next(data);
      }
    });

    return blogs;
  }

  add(data:any):Observable<any> {
    return this.http.post(this.prefix + 'add', data);
  }
  
  update(data:any):Observable<any> {
    return this.http.post(this.prefix+'update',data);
  }  
  
  delete(data:any):Observable<any> {
    return this.http.post(this.prefix+'delete',data);
  }
}
