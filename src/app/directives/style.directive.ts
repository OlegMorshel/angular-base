import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: "[appStyle]"
})
export class StyleDirective {
  @Input('appStyle') color?: string | null = "blue"
  @Input() dStyles: {
    border?: string,
    fontWeight?: string,
    borderRadius?: string
  }
  @HostBinding("style.color") elColor: null | string | undefined = null

  @HostListener('click', ['$event']) onClick(event: Event) {

  }

  constructor(private elRef: ElementRef, private r: Renderer2) {
  }

  @HostListener("mouseenter") onEnter() {
    this.elColor = this.color
    // this.r.setStyle(this.elRef.nativeElement, "color", this.color)
    // this.r.setStyle(this.elRef.nativeElement, "fontWeight", this.dStyles.fontWeight)
    // this.r.setStyle(this.elRef.nativeElement, "border", this.dStyles.border)
    // this.r.setStyle(this.elRef.nativeElement, "borderRadius", this.dStyles.borderRadius)
  }

  @HostListener("mouseleave") onLeave() {
    this.elColor = null
    // this.r.setStyle(this.elRef.nativeElement, "color", null)
    // this.r.setStyle(this.elRef.nativeElement, "fontWeight", null)
    // this.r.setStyle(this.elRef.nativeElement, "border", null)
    // this.r.setStyle(this.elRef.nativeElement, "borderRadius", null)
  }
}
