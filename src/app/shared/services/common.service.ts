import { ActivatedRoute, Router } from '@angular/router';
// import { AlertController, LoadingController, MenuController, Platform, ToastController } from '@ionic/angular';

import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  toastConfig:any = {
    // closeButton: true,
    tapToDismiss: true,
    progressBar: true,
    progressAnimation: 'decreasing',
    // toastClass: 'text-center',
    messageClass: 'small text-center',
    // containerId: 'toast-container',
    // debug: false,
    fadeIn: 300,
    fadeOut: 1000,
    extendedTimeOut: 1000,
    positionClass: 'toast-top-center',
    timeOut: 5000, // Set timeOut to 0 to make it sticky
    // theme: 'bootstrap'
  };

  loader:any = null;
  time: any = null;

  alerts: any[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private toastr: ToastrService,
    // private http: HttpService
  ) { }
  
  showToast(message: any, type: any) {
    const title:any =null;
    switch (type) {
      case 'success':
        this.toastr.success(message, title,this.toastConfig);
        break;
      case 'warning':
        this.toastr.warning(message, title, this.toastConfig);
        break;
      case 'info':
        this.toastr.info(message, title, this.toastConfig);
        break;
      case 'danger':
        this.toastr.error(message, title, this.toastConfig);
        break;

      default:
        this.toastr.info(message, title, this.toastConfig);
        break;
    }
  }

  showAlert(title: any, msg: any, type: any) {
    return Swal.fire(title, msg, type);
  }

  route(link: any) {
    // this.router.navigate([link]);
    // this.router.navigateByUrl(link, { skipLocationChange: true, replaceUrl: true });
    this.router.navigateByUrl(link, { skipLocationChange: false, replaceUrl: true });
  }

  back() {
    this.location.back();
  }

  getQuery(str: any) {
    return this.activatedRoute.snapshot.paramMap.get(str);
  }

  greeting() {
    let greeting;

    this.time = new Date().getHours();
    if (this.time < 12) {
      greeting = 'Good morning';
    } else if (this.time >= 12 && this.time <= 16) {
      greeting = 'Good afternoon';
    } else if (this.time > 16 && this.time <= 24) {
      greeting = 'Good evening';
    }
    return greeting;
  }

  href(url: string) {
    window.open(url, '_blank');
  }

  popUp(message:any, type:any) {
    const icon =
      type === 'success'
        ? 'checkmark-circle'
        : type === 'info'
        ? 'notifications'
        : 'close-circle';
    const color = type === 'danger' ? 'danger' : 'success';
    const id = Math.floor(Math.random() * 10000);
    window.document.body.insertAdjacentHTML(
      `afterbegin`,
      `<div id="loader-${id}" class="top-loader"><div class="shadow"><span><ion-icon color="${color}" name="${icon}" style="font-size: 80px;"></ion-icon></span><span style="display: grid; place-items: center; font-size: 18px;color: var(--ion-color-black)!important;">${message}</span><span style="display: grid; place-items: center;"><ion-button shape="round" onclick="document.getElementById('loader-${id}').remove()">Ok</ion-button></span></div></div>`
    );
  }
  
  //GENERATE RANDOM STRING
  randomString(length: number, chars: any) {
    const rand = Math.floor(Math.random() * 1000000);
    let mask = '';
    if (chars.indexOf('a') > -1) { mask += 'abcdefghijklmnopqrstuvwxyz'; }
    if (chars.indexOf('A') > -1) { mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; }
    if (chars.indexOf('#') > -1) { mask += '0123456789'; }
    if (chars.indexOf('!') > -1) { mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\'; }
    if (chars.indexOf('') > -1){ mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'}
    let result = '';
    for (let i = length; i > 0; --i) { result += mask[Math.round(Math.random() * (mask.length - 1))]; }
    return result;
  }

  //GENERATE RANDOM NUMBER
  randNum(length: number) {
    const rand = Math.floor(Math.random() * 1000000);
    let mask = '';
    mask += '0123456789';
    let result = '';
    for (let i = length; i > 0; --i) { result += mask[Math.round(Math.random() * (mask.length - 1))]; }
    return result;
  }

  nFormatter(num: number, digits: number) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find((item) => {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
  }

  getFormattedDate(date:any, preformattedDate:any = false, hideYear = false) {
    const MONTH_NAMES = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const day = date.getDate();
    const month = MONTH_NAMES[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    let minutes = date.getMinutes();
  
    if (minutes < 10) {
      // Adding leading zero to minutes
      minutes = `0${ minutes }`;
    }
  
    if (preformattedDate) {
      // Today at 10:20
      // Yesterday at 10:20
      return `${ preformattedDate } at ${ hours }:${ minutes }`;
    }
  
    if (hideYear) {
      // 10. January at 10:20
      return `${ month } ${ day } at ${ hours }:${ minutes }`;
    }
  
    // 10. January 2017. at 10:20
    return `${ month } ${ day }, ${ year } at ${ hours }:${ minutes }`;
  }
  
  // --- Main function
  timeAgo(dateParam:any) {
    if (!dateParam) {
      return null;
    }
  
    const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
    const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
    const today:any = new Date();
    const yesterday = new Date(today - DAY_IN_MS);
    const seconds = Math.round((today - date) / 1000);
    const minutes = Math.round(seconds / 60);
    const isToday = today.toDateString() === date.toDateString();
    const isYesterday = yesterday.toDateString() === date.toDateString();
    const isThisYear = today.getFullYear() === date.getFullYear();
  
  
    if (seconds < 5) {
      return 'now';
    } else if (seconds < 60) {
      return `${ seconds } seconds ago`;
    } else if (seconds < 90) {
      return 'about a minute ago';
    } else if (minutes < 60) {
      return `${ minutes } minutes ago`;
    } else if (isToday) {
      return this.getFormattedDate(date, 'Today'); // Today at 10:20
      // return this.getFormattedDate(date); // Today at 10:20
    } else if (isYesterday) {
      return this.getFormattedDate(date, 'Yesterday'); // Yesterday at 10:20
    } else if (isThisYear) {
      return this.getFormattedDate(date, false, true); // 10. January at 10:20
    }
  
    return this.getFormattedDate(date); // 10. January 2017. at 10:20
  }

  formatDateForMySQL(date: Date): string {
    const year = date.getFullYear();
    const month = this.padZero(date.getMonth() + 1);
    const day = this.padZero(date.getDate());
    const hours = this.padZero(date.getHours());
    const minutes = this.padZero(date.getMinutes());
    const seconds = this.padZero(date.getSeconds());
  
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  
  padZero(num: number): string {
    return num.toString().padStart(2, '0');
  }

  dateOnly(date:any) {
    return date.split(' ')[0];
  }

  searchDate(date:any) {
    // return this.formatDateForMySQL(this.dateOnly(date));
  }

  async browser(url:any) {
    await window.open(url);
  }

  decodeHtmlEntities(input:any) {
    const entities:any = {
      '&quot;': '"',
      '&amp;': '&',
      '&apos;': "'",
      '&lt;': '<',
      '&gt;': '>',
      '&nbsp;': ' ',
      '&iexcl;': '¡',
      '&cent;': '¢',
      '&pound;': '£',
      '&curren;': '¤',
      '&yen;': '¥',
      '&brvbar;': '¦',
      '&sect;': '§',
      '&uml;': '¨',
      '&copy;': '©',
      '&ordf;': 'ª',
      '&laquo;': '«',
      '&not;': '¬',
      '&shy;': '\u00AD',
      '&reg;': '®',
      '&macr;': '¯',
      '&deg;': '°',
      '&plusmn;': '±',
      '&sup2;': '²',
      '&sup3;': '³',
      '&acute;': '´',
      '&micro;': 'µ',
      '&para;': '¶',
      '&middot;': '·',
      '&cedil;': '¸',
      '&sup1;': '¹',
      '&ordm;': 'º',
      '&raquo;': '»',
      '&frac14;': '¼',
      '&frac12;': '½',
      '&frac34;': '¾',
      '&iquest;': '¿',
      '&Agrave;': 'À',
      '&Aacute;': 'Á',
      '&Acirc;': 'Â',
      '&Atilde;': 'Ã',
      '&Auml;': 'Ä',
      '&Aring;': 'Å',
      '&AElig;': 'Æ',
      '&Ccedil;': 'Ç',
      '&Egrave;': 'È',
      '&Eacute;': 'É',
      '&Ecirc;': 'Ê',
      '&Euml;': 'Ë',
      '&Igrave;': 'Ì',
      '&Iacute;': 'Í',
      '&Icirc;': 'Î',
      '&Iuml;': 'Ï',
      '&ETH;': 'Ð',
      '&Ntilde;': 'Ñ',
      '&Ograve;': 'Ò',
      '&Oacute;': 'Ó',
      '&Ocirc;': 'Ô',
      '&Otilde;': 'Õ',
      '&Ouml;': 'Ö',
      '&times;': '×',
      '&Oslash;': 'Ø',
      '&Ugrave;': 'Ù',
      '&Uacute;': 'Ú',
      '&Ucirc;': 'Û',
      '&Uuml;': 'Ü',
      '&Yacute;': 'Ý',
      '&THORN;': 'Þ',
      '&szlig;': 'ß',
      '&agrave;': 'à',
      '&aacute;': 'á',
      '&acirc;': 'â',
      '&atilde;': 'ã',
      '&auml;': 'ä',
      '&aring;': 'å',
      '&aelig;': 'æ',
      '&ccedil;': 'ç',
      '&egrave;': 'è',
      '&eacute;': 'é',
      '&ecirc;': 'ê',
      '&euml;': 'ë',
      '&igrave;': 'ì',
      '&iacute;': 'í',
      '&icirc;': 'î',
      '&iuml;': 'ï',
      '&eth;': 'ð',
      '&ntilde;': 'ñ',
      '&ograve;': 'ò',
      '&oacute;': 'ó',
      '&ocirc;': 'ô',
      '&otilde;': 'õ',
      '&ouml;': 'ö',
      '&divide;': '÷',
      '&oslash;': 'ø',
      '&ugrave;': 'ù',
      '&uacute;': 'ú',
      '&ucirc;': 'û',
      '&uuml;': 'ü',
      '&yacute;': 'ý',
      '&thorn;': 'þ',
      '&yuml;': 'ÿ',
      '&fnof;': 'ƒ',
      '&Alpha;': 'Α',
      '&Beta;': 'Β',
      '&Gamma;': 'Γ',
      '&Delta;': 'Δ',
      '&Epsilon;': 'Ε',
      '&Zeta;': 'Ζ',
      '&Eta;': 'Η',
      '&Theta;': 'Θ',
      '&Iota;': 'Ι',
      '&Kappa;': 'Κ',
      '&Lambda;': 'Λ',
      '&Mu;': 'Μ',
      '&Nu;': 'Ν',
      '&Xi;': 'Ξ',
      '&Omicron;': 'Ο',
      '&Pi;': 'Π',
      '&Rho;': 'Ρ',
      '&Sigma;': 'Σ',
      '&Tau;': 'Τ',
      '&Upsilon;': 'Υ',
      '&Phi;': 'Φ',
      '&Chi;': 'Χ',
      '&Psi;': 'Ψ',
      '&Omega;': 'Ω',
      '&alpha;': 'α',
      '&beta;': 'β',
      '&gamma;': 'γ',
      '&delta;': 'δ',
      '&epsilon;': 'ε',
      '&zeta;': 'ζ',
      '&eta;': 'η',
      '&theta;': 'θ',
      '&iota;': 'ι',
      '&kappa;': 'κ',
      '&lambda;': 'λ',
      '&mu;': 'μ',
      '&nu;': 'ν',
      '&xi;': 'ξ',
      '&omicron;': 'ο',
      '&pi;': 'π',
      '&rho;': 'ρ',
      '&sigmaf;': 'ς',
      '&sigma;': 'σ',
      '&tau;': 'τ',
      '&upsilon;': 'υ',
      '&phi;': 'φ',
      '&chi;': 'χ',
      '&psi;': 'ψ',
      '&omega;': 'ω',
      '&thetasym;': 'ϑ',
      '&upsih;': 'ϒ',
      '&piv;': 'ϖ',
      '&bull;': '•',
      '&hellip;': '…',
      '&prime;': '′',
      '&Prime;': '″',
      '&oline;': '‾',
      '&frasl;': '⁄',
      '&weierp;': '℘',
      '&image;': 'ℑ',
      '&real;': 'ℜ',
      '&trade;': '™',
      '&alefsym;': 'ℵ',
      '&larr;': '←',
      '&uarr;': '↑',
      '&rarr;': '→',
      '&darr;': '↓',
      '&harr;': '↔',
      '&crarr;': '↵',
      '&lArr;': '⇐',
      '&uArr;': '⇑',
      '&rArr;': '⇒',
      '&dArr;': '⇓',
      '&hArr;': '⇔',
      '&forall;': '∀',
      '&part;': '∂',
      '&exist;': '∃',
      '&empty;': '∅',
      '&nabla;': '∇',
      '&isin;': '∈',
      '&notin;': '∉',
      '&ni;': '∋',
      '&prod;': '∏',
      '&sum;': '∑',
      '&minus;': '−',
      '&lowast;': '∗',
      '&radic;': '√',
      '&prop;': '∝',
      '&infin;': '∞',
      '&ang;': '∠',
      '&and;': '∧',
      '&or;': '∨',
      '&cap;': '∩',
      '&cup;': '∪',
      '&int;': '∫',
      '&there4;': '∴',
      '&sim;': '∼',
      '&cong;': '≅',
      '&asymp;': '≈',
      '&ne;': '≠',
      '&equiv;': '≡',
      '&le;': '≤',
      '&ge;': '≥',
      '&sub;': '⊂',
      '&sup;': '⊃',
      '&nsub;': '⊄',
      '&sube;': '⊆',
      '&supe;': '⊇',
      '&oplus;': '⊕',
      '&otimes;': '⊗',
      '&perp;': '⊥',
      '&sdot;': '⋅',
      '&lceil;': '⌈',
      '&rceil;': '⌉',
      '&lfloor;': '⌊',
      '&rfloor;': '⌋',
      '&lang;': '〈',
      '&rang;': '〉',
      '&loz;': '◊',
      '&spades;': '♠',
      '&clubs;': '♣',
      '&hearts;': '♥',
      '&diams;': '♦'
      // Add more entities as needed
    };
  
    return input.replace(/&(quot|amp|apos|lt|gt|nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|fnof|Alpha|Beta|Gamma|Delta|Epsilon|Zeta|Eta|Theta|Iota|Kappa|Lambda|Mu|Nu|Xi|Omicron|Pi|Rho|Sigma|Tau|Upsilon|Phi|Chi|Psi|Omega|alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigmaf|sigma|tau|upsilon|phi|chi|psi|omega|thetasym|upsih|piv|bull|hellip|prime|Prime|oline|frasl|weierp|image|real|trade|alefsym|larr|uarr|rarr|darr|harr|crarr|lArr|uArr|rArr|dArr|hArr|forall|part|exist|empty|nabla|isin|notin|ni|prod|sum|minus|lowast|radic|prop|infin|ang|and|or|cap|cup|int|there4|sim|cong|asymp|ne|equiv|le|ge|sub|sup|nsub|sube|supe|oplus|otimes|perp|sdot|lceil|rceil|lfloor|rfloor|lang|rang|loz|spades|clubs|hearts|diams);/g, (match:any, entity:any) => {
      return entities[match] || match;
    });
  }

  decodeHtml(encodedHtml: string): string {
    const parser:any = new DOMParser();
    const decodedHtml:any = parser.parseFromString(this.decodeHtmlEntities(encodedHtml), 'text/html').documentElement.textContent;
    return decodedHtml;
  }

  isWebShareSupported() {
    return 'share' in navigator;
  }

  shareContent(title: string, text: string, url: string) {
    if (this.isWebShareSupported()) {
      navigator
        .share({
          title: title,
          text: text,
          url: url,
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      console.error('Web Share API is not supported in this browser.');
    }
  }

}
