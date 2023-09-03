import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

declare var window:any;

@Directive({
  selector: '[connect]'
})
export class ConnectDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    // const ripple = this.renderer.createElement('span');
    // this.renderer.addClass(ripple, 'ripple-effect');
    // this.renderer.appendChild(this.el.nativeElement, ripple);

    // const rect = this.el.nativeElement.getBoundingClientRect();
    // const x = event.clientX - rect.left;
    // const y = event.clientY - rect.top;
    // const size = Math.max(rect.width, rect.height);
    // this.renderer.setStyle(ripple, 'width', `${size}px`);
    // this.renderer.setStyle(ripple, 'height', `${size}px`);
    // this.renderer.setStyle(ripple, 'top', `${y - size / 2}px`);
    // this.renderer.setStyle(ripple, 'left', `${x - size / 2}px`);
    // this.renderer.setStyle(ripple, 'opacity', '1');

    // setTimeout(() => {
    //   this.renderer.removeChild(this.el.nativeElement, ripple);
    // }, 600);
    // Select the modal and the button that triggers the modal
    const modal = document.getElementById('wallet');
    // Use the Bootstrap Modal method 'show' to open the modal
    const bootstrapModal = new window.bootstrap.Modal(modal);
    bootstrapModal.show();
  }
}
