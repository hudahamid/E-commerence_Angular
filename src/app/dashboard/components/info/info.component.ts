import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  items: any[] = [
    { num:1,name: 'Heart & slogan', Image : '', Brands: 'zara', Productcode: '098765432',categories:'T-shirt',stack:'in stock14',sale :'20.4$' },
    { num:1,name: 'Heart & slogan', Image : '', Brands: 'zara', Productcode: '098765432',categories:'T-shirt',stack:'out of stock(0)',sale :'20.4$' },
    { num:1,name: 'Sima Sleman', Image : '', Brands: 'zara', Productcode: '098765432',categories:'T-shirt',stack:'in stock14',sale :'20.4$' },
    { num:1,name: 'Sima Sleman', Image : '', Brands: 'zara', Productcode: '098765432',categories:'T-shirt',stack:'out of stock(0)',sale :'20.4$' },
    { num:1,name: 'Sima Sleman', Image : '', Brands: 'zara', Productcode: '098765432',categories:'T-shirt',stack:'in stock14',sale :'20.4$' },
    
    // Add more items as needed
  ];
  activeSlide: number = 0;
  prevSlide(): void {
    this.activeSlide = (this.activeSlide - 1 + this.items.length) % this.items.length;
  }

  nextSlide(): void {
    this.activeSlide = (this.activeSlide + 1) % this.items.length;
  }

  goToSlide(index: number): void {
    this.activeSlide = index;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
