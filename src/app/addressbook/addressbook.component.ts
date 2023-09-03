import { Component } from '@angular/core';

@Component({
  selector: 'app-addressbook',
  templateUrl: './addressbook.component.html',
  styleUrls: ['./addressbook.component.scss']
})
export class AddressbookComponent {

  addresses:any[] = [];

  address:string = "";

  constructor() {}

  ngOnInit() {
    try {
      const addresses = JSON.parse(localStorage.getItem('addresses')!);      
      if(addresses) {
        this.addresses = addresses;
      }
    } catch (error) {
      
    }
  }

  addAddress() {
    if(this.address) {
      this.addresses.push({address: this.address,multiWallet: false});
  
      setTimeout(() => {
        this.address = "";
        this.saveAddress();
      }, 1000);
    }
  }

  saveAddress() {
    return localStorage.setItem('addresses',JSON.stringify(this.addresses));
  }

  deleteItem(i:number) {
    this.addresses.splice(i,1);
    this.saveAddress();
  }

  setMultiWallet(i:number,event:any)
  {
    const checked:any = event.target.checked;

    this.addresses[i].multiWallet = checked;

    this.saveAddress();
  }
}
