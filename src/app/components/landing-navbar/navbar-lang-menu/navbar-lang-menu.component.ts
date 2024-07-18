import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-lang-menu',
  templateUrl: './navbar-lang-menu.component.html',
  styleUrl: './navbar-lang-menu.component.css'
})
export class NavbarLangMenuComponent {
  @Input() text: string = "";
  @Input() img: string = "";
}
