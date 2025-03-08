import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isVisible: boolean = true;
  lastScrollTop: number = 0;
  @HostListener('window:scroll', [])
  onScroll(): void {
    const currentScroll = window.scrollX || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop) {
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
}
