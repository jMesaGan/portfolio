import { Component } from '@angular/core';
import {NavigationMenuComponent} from "../navigation-menu/navigation-menu.component";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    NavigationMenuComponent
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

}
