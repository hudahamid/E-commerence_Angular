import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  isModalOpen: boolean = false;
  constructor() { }
   // Cancel modal
   cancelModal() {
    this.isModalOpen = false;
  }

  ngOnInit(): void {
  }

}



