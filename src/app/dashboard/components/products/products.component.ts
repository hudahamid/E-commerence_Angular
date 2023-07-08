import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  items: any[] = [
    { num:1,name: 'Sima Sleman', phone: '123-456-7890', email: 'john@example.com', status: true },
    { num:1,name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com', status: false },
    { num:1,name: 'Sima Sleman', phone: '123-456-7890', email: 'john@example.com', status: true },
    { num:4,name: 'Sima Sleman', phone: '123-456-7890', email: 'john@example.com', status: true },
    { num:4,name: 'Sima Sleman', phone: '123-456-7890', email: 'john@example.com', status: true },
    { num:4,name: 'Sima Sleman', phone: '123-456-7890', email: 'john@example.com', status: true },
    { num:4,name: 'Sima Sleman', phone: '123-456-7890', email: 'john@example.com', status: true },
    { num:4,name: 'Sima Sleman', phone: '123-456-7890', email: 'john@example.com', status: true },
    { num:4,name: 'Sima Sleman', phone: '123-456-7890', email: 'john@example.com', status: true },
    { num:4,name: 'Sima Sleman', phone: '123-456-7890', email: 'john@example.com', status: true },
    { num:4,name: 'Sima Sleman', phone: '123-456-7890', email: 'john@example.com', status: true },
    // Add more items as needed
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
