import { Component } from '@angular/core';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user!:any;
  hashedID!:any;

  constructor(
    private storage: StorageService
  ) {}

  ngOnInit() {
    try {
      this.user = this.storage.get('user');

      this.hashedID = this.hashString(this.user.email);
      this.hashID();
    } catch (error) {
      
    }
  }

  async hashString(inputString: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(inputString);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashedString = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashedString;
  }

  async hashID() {
    const inputString = this.user.email;
    const hashedString = await this.hashString(inputString);
    this.hashedID = hashedString;
  }

  copyText(): void {
    const contentToCopy = document.getElementById('contentToCopy');
    if (contentToCopy) {
      const range = document.createRange();
      range.selectNode(contentToCopy);

      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);

        document.execCommand('copy');
        selection.removeAllRanges();

        alert('Text copied to clipboard!');
      }
    }
  }
}
