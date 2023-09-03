import { Injectable } from '@angular/core';
declare var require:any;
const SecureLS = require('secure-ls');

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  ls = new SecureLS({
    encodingType: 'aes',
    isCompression: false,
    encryptionSecret: 's3cr3t$@1'
  });

  constructor() {}

  set(key: string, value: any) {
    this.ls.set(key, value);
  }
  
  get(key: string) {
    return this.ls.get(key);
  }

  getAll() {
    this.ls.getAllKeys();
  }
  
  clear() {
    this.ls.clear();
  }

  remove(key:any) {
    this.ls.remove(key);
  }

  removeAll() {
    this.ls.removeAll();
  }
}
