import { Component } from '@angular/core';
import { HeroComponent } from "../views/hero/hero.component";
import { ServicesComponent } from "../views/services/services.component";
import { LogoComponent } from "@shared/components/logo/logo.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ServicesComponent, LogoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
