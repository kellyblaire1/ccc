import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  prefix = 'forms/';

  constructor(private http: HttpService, private storage: StorageService,) { }

  mail(data:any):Observable<any> {
    return this.http.post(this.prefix + 'mail', data);
  }
  
}
