import { AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { HeroComponent } from "../views/hero/hero.component";
import { ServicesComponent } from "../views/services/services.component";
import { LogoComponent } from "@shared/components/logo/logo.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ServicesComponent, LogoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('scrollerContainer') scrollerContainer!:  ElementRef<HTMLElement>;
  @ViewChild('sectionScroller') sectionScroller!:  ElementRef<HTMLElement>;
  activeSectionIndex = signal<number>(0);
  sectionsCount: number = 0;
  sectionScrollerChildren!: NodeListOf<HTMLElement>;

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.sectionScrollerChildren = this.sectionScroller!.nativeElement.childNodes as NodeListOf<HTMLElement>;
      this.sectionsCount = this.sectionScroller!.nativeElement.childElementCount;
    }, 1000);
  }

  nextSection(): void{
    if(this.activeSectionIndex() === this.sectionsCount - 1) return;
    this.activeSectionIndex.set(this.activeSectionIndex() + 1);
    
    this.scrollToIndex(this.sectionScrollerChildren[this.activeSectionIndex()]);
  }

  previousSection(): void{
    if(this.activeSectionIndex() === 0) return;
    this.activeSectionIndex.set(this.activeSectionIndex() - 1);

    this.scrollToIndex(this.sectionScrollerChildren[this.activeSectionIndex()]);
  }

  scrollToIndex(element: HTMLElement): void{
    console.log(element.offsetTop)
    this.sectionScroller.nativeElement.scrollTo(0, element.offsetTop);
  }

}
