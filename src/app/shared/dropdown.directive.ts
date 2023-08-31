import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;
  hostElem = this.elementRef.nativeElement;
  @ViewChild('dropdownmenuid') dropdownMenu: ElementRef;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') toggleOpen() {
    console.log('hello');

    this.isOpen = !this.isOpen;
    this.isOpen ? this.hostElem.children[1].classList.add('show') : this.hostElem.children[1].classList.remove('show');
  }
}
