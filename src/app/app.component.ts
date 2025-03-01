import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavigationMenuComponent} from "./navigation-menu/navigation-menu.component";
import {TopBarComponent} from "./top-bar/top-bar.component";
import {AboutComponent} from "./about/about.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationMenuComponent, TopBarComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testAngularWebstorm';
}
