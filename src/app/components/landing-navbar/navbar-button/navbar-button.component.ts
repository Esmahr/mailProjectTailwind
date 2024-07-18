import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrl: './navbar-button.component.css'
})
export class NavbarButtonComponent {
  @Input() text: string = "";
  @Input() class: string = "";
}
