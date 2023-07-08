import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
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
  // activeSlideIndex = 0;

  // changeSlide(index: number): void {
  //   this.activeSlideIndex = index;
  // }

  constructor() { }

  ngOnInit(): void {
  }
  editItem(item: any) {
    console.log('Edit item:', item);
    // Implement your edit functionality here
  }

  deleteItem(item: any) {
    console.log('Delete item:', item);
    // Implement your delete functionality here
  }

}
