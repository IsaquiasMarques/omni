import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Injectable, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'landing-page';
  
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      AOS.init({
        offset: 70,
        duration: 900,
        easing: 'ease-in-out-cubic',
        delay: 100,
      });
    }
  }

}
