import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import {
  Event,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { headerLinksData, headerLinksToggle } from './header-links';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements headerLinksToggle, OnInit, OnDestroy {
  screenWidth = 0;
  collapsed = false;
  headerData = headerLinksData;
  menuOpen = false;
  isSmallScreen = false;
  private unlisten!: () => void;

  @Output() onToggleHeaderLinks: EventEmitter<headerLinksToggle> =
    new EventEmitter();

  constructor(private render: Renderer2) {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event']) OnResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth <= 768;
  }

  toggleMenu() {
    if (this.isSmallScreen) {
      const navLinks = document.querySelector('.navbar-three .navbar-toggler');

      this.menuOpen = !this.menuOpen;
      this.collapsed = !this.collapsed;
      navLinks?.classList.toggle('active');

      if (this.menuOpen) {
        this.unlisten = this.render.listen('document', 'click', (event) => {
          if (!event.target.closest('navbar-nav')) {
            this.menuOpen = false;
            navLinks?.classList.remove('active');

            this.unlisten();
          }
        });
      } else if (this.unlisten) {
        this.unlisten();
      }
    }
  }

  closeMenu() {
    if (this.isSmallScreen) {
      const navLinks = document.querySelector('.navbar-three .navbar-toggler .navbar');
      this.menuOpen = false;
      navLinks?.classList.remove('active');

      if (this.unlisten) {
        this.unlisten();
      }
    }
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleHeaderLinks.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  ngOnDestroy(): void {
    if (this.unlisten) this.unlisten();
  }
}
