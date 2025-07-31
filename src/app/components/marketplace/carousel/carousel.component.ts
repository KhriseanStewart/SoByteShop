import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ReadDataService } from 'src/app/database/read_data.service';

interface Item {
  id: string;
  header: string;
  subtext: string;
  imageUrl: string;
  date: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy, AfterViewInit {
  items: Item[] = [];
  currentIndex = 0;
  autoScrollInterval: any;

  @ViewChild('carouselWrapper') carouselWrapper!: ElementRef<HTMLDivElement>;

  constructor(private readData: ReadDataService) { }

  async ngOnInit() {
    try {
      const data = await this.readData.readData();
      this.items = data as Item[];
      this.startAutoScroll();
    } catch (e) {
      console.log("Error happened:", e);
    }
    console.log(this.items);
  }

  ngAfterViewInit() {
    this.setWrapperWidth();
  }

  ngOnDestroy() {
    clearInterval(this.autoScrollInterval);
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      this.next();
    }, 3000);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.updateTransform();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.updateTransform();
  }

  // Method to set the wrapper width
  setWrapperWidth() {
    if (this.carouselWrapper && this.items.length > 0) {
      const width = this.items.length * 100; // total width in percentage
      this.carouselWrapper.nativeElement.style.width = `${width}%`;
    }
  }

  // Method to update the transform based on current index
  updateTransform() {
    if (this.carouselWrapper) {
      const translateX = -(this.currentIndex * (100 / this.items.length));
      this.carouselWrapper.nativeElement.style.transform = `translateX(${translateX}%)`;
    }
  }
}