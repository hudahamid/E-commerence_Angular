import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  items: any[] = [
    { num:1,name: 'Heart & slogan', Image : '', Brands: 'zara', Productcode: '098765432',categories:'T-shirt',stack:'in stock14',sale :'20.4$' },
    { num:1,name: 'Heart & slogan', Image : '', Brands: 'zara', Productcode: '098765432',categories:'T-shirt',stack:'out of stock(0)',sale :'20.4$' },
    { num:1,name: 'Sima Sleman', Image : '', Brands: 'zara', Productcode: '098765432',categories:'T-shirt',stack:'in stock14',sale :'20.4$' },
    { num:1,name: 'Sima Sleman', Image : '', Brands: 'zara', Productcode: '098765432',categories:'T-shirt',stack:'out of stock(0)',sale :'20.4$' },
    { num:1,name: 'Sima Sleman', Image : '', Brands: 'zara', Productcode: '098765432',categories:'T-shirt',stack:'in stock14',sale :'20.4$' },
    { num:1,name: 'Sima Sleman', Image : '', Brands: 'zara', Productcode: '098765432',categories:'T-shirt',stack:'out of stock(0)',sale :'20.4$' },
    { num:1,name: 'Sima Sleman', Image : '', Brands: 'zara', Productcode: '098765432',categories:'T-shirt',stack:'in stock14',sale :'20.4$' },
    { num:1,name: 'Sima Sleman', Image : '', Brands: 'zara', Productcode: '098765432',categories:'T-shirt',stack:'out of stock(0)',sale :'20.4$' },
    { num:1,name: 'Sima Sleman', Image : '', Brands: 'zara', Productcode: '098765432',categories:'T-shirt',stack:'out of stock(0)',sale :'20.4$' },
    { num:1,name: 'Sima Sleman', Image : '', Brands: 'zara', Productcode: '098765432',categories:'T-shirt',stack:'in stock14',sale :'20.4$' },
    { num:1,name: 'Sima Sleman', Image : '', Brands: 'zara', Productcode: '098765432',categories:'T-shirt',stack:'out of stock(0)',sale :'20.4$' },
    // Add more items as needed
  ];
  currentSlide = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
