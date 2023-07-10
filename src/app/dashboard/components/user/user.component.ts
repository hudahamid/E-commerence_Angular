import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  // items: any[] = [
  //   { num:1,name: 'Sima Sleman', phone: '123-456-7890', email: 'john@example.com', status: true },
  //   { num:1,name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com', status: false },
  //   { num:1,name: 'Sima Sleman', phone: '123-456-7890', email: 'john@example.com', status: true },
  //   { num:4,name: 'Sima Sleman', phone: '123-456-7890', email: 'john@example.com', status: true },
  //   { num:4,name: 'Sima Sleman', phone: '123-456-7890', email: 'john@example.com', status: true },
  //   { num:4,name: 'Sima Sleman', phone: '123-456-7890', email: 'john@example.com', status: true },
  //   { num:4,name: 'Sima Sleman', phone: '123-456-7890', email: 'john@example.com', status: true },
  //   { num:4,name: 'Sima Sleman', phone: '123-456-7890', email: 'john@example.com', status: true },
  //   { num:4,name: 'Sima Sleman', phone: '123-456-7890', email: 'john@example.com', status: true },
  //   { num:4,name: 'Sima Sleman', phone: '123-456-7890', email: 'john@example.com', status: true },
  //   { num:4,name: 'Sima Sleman', phone: '123-456-7890', email: 'john@example.com', status: true },
  //   // Add more items as needed
  // ];
  // activeSlideIndex = 0;

  // changeSlide(index: number): void {
  //   this.activeSlideIndex = index;
  // }
  tableItems: any[] = [
    { num: 1, name: 'Sima Sleman', phone: '123-456-7890', email: 'john@example.com', status: true },
    { num: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com', status: false },
    { num: 3, name: 'John Doe', phone: '555-123-4567', email: 'john.doe@example.com', status: true },
    { num: 4, name: 'Emily Johnson', phone: '888-999-0000', email: 'emily@example.com', status: true },
    { num: 5, name: 'David Brown', phone: '111-222-3333', email: 'david@example.com', status: false },
    { num: 6, name: 'Emma Wilson', phone: '444-555-6666', email: 'emma@example.com', status: true },
  ];

  activeSlideIndex: number = 0;
  dropdownIndex: number | null = null;

  changeSlide(index: number): void {
    this.activeSlideIndex = index;
  }

  toggleDropdown(index: number): void {
    if (this.dropdownIndex === index) {
      this.dropdownIndex = null;
    } else {
      this.dropdownIndex = index;
    }
  }

  editItem(item: any): void {
    // Handle edit functionality here
    console.log('Edit Item:', item);
  }
  deleteItem(item: any): void {
    // Handle delete functionality here
    console.log('Delete Item:', item);
  }
  constructor() { }

  ngOnInit(): void {
  }
 

 

}
