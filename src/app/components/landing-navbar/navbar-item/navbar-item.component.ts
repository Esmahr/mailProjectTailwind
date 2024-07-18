import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.css'
})
export class NavbarItemComponent {
  @Input() text: string = "";
  @Input() link: string = "";
}
