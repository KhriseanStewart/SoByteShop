import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css'],
})
export class ProductpageComponent implements OnInit {
  uuid: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.uuid = params.get('uuid');
      if (this.uuid) {
        // Fetch product data from Firebase using this UUID
        this.loadProduct(this.uuid);
      }
    });
  }

  loadProduct(uuid: string) {
    // Your Firebase logic here to get product details by UUID
  }
}
