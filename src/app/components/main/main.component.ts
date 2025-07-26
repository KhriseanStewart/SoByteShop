import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ReadDataService } from 'src/app/database/read_data.service';

interface ProductData {
  id: string;
  title: string;
  price: string;
  description: string;
  imageUrl: string;
  location: string;
  ownerId: string;
  productId: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {
  items: ProductData[] = [];
  displayedItems: ProductData[] = [];
  batchSize = 10;

  @ViewChild('observer') private observerElement!: ElementRef;
  private observer!: IntersectionObserver;

  constructor(private readProduct: ReadDataService) { }

  async ngOnInit() {
    this.items = await this.readProduct.readProductData() as ProductData[];
    this.displayedItems = this.items.slice(0, this.batchSize);
  }

  ngAfterViewInit() {
    this.setupObserver();
  }

  setupObserver() {
    this.observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        this.loadMore();
      }
    });
    this.observer.observe(this.observerElement.nativeElement);
    
    this.observer = new IntersectionObserver(entries => {
    console.log('Observer triggered', entries);
      if (entries[0].isIntersecting) {
        this.loadMore();
      }
    });
  }

  loadMore() {
    const start = this.displayedItems.length;
    const nextItems = this.items.slice(start, start + this.batchSize);
    this.displayedItems = [...this.displayedItems, ...nextItems];

    // If all items are loaded, disconnect the observer
    if (this.displayedItems.length >= this.items.length && this.observer) {
      this.observer.disconnect();
    }
    console.log('Hello',this.displayedItems);
  }
}