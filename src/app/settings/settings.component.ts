import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  currencies = [
    {
      name: 'USD',
      flag: '',
    },
    {
      name: 'BTC',
      flag: '',
    },
    {
      name: 'ETH',
      flag: '',
    },
    {
      name: 'SOL',
      flag: '',
    },
    {
      name: 'EUR',
      flag: '',
    },
    {
      name: 'GBP',
      flag: '',
    },
    {
      name: 'AUD',
      flag: '',
    },
    {
      name: 'CAD',
      flag: '',
    },
    {
      name: 'HKD',
      flag: '',
    },
    {
      name: 'CNY',
      flag: '',
    },
    {
      name: 'JPY',
      flag: '',
    },
    {
      name: 'BRL',
      flag: '',
    },
    {
      name: 'KRW',
      flag: '',
    },
    {
      name: 'RUB',
      flag: '',
    },
    {
      name: 'INR',
      flag: '',
    },
    {
      name: 'IDR',
      flag: '',
    },
    {
      name: 'TRY',
      flag: '',
    },
    {
      name: 'CHF',
      flag: '',
    },
  ];

  toggleLists = ['Hide small balances',
    'Show unpriced tokens',
    'Show LP Tokens details',
    'Show pendings details'];

  currency = "USD";

  selectCurr(name:string) {
    this.currency = name;
  }
}
