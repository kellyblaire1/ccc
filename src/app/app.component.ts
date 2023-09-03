import { Component } from '@angular/core';
import { StorageService } from './shared/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cryptocoinchain';

  showSideBar = false;
  
  constructor(
    private storage: StorageService,
  ) {}
  
  ngOnInit() {
    try {
      const user = this.storage.get('user');

      if(user) {
        this.showSideBar = true;
      }
      
    } catch (error) {
      
    }
  }
}
