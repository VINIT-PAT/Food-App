import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  //data = ["samosa","fafda","pav"]
  data = [{
      title:"samosa",subtitle:"Yellow samosa",price:700
     },
     {
      title:"samosa1",subtitle:"Yellow samosa1",price:730
     },
     {
      title:"samosa2",subtitle:"Yellow samosa2",price:750
     },
     {
      title:"samosa3",subtitle:"Yellow samosa3",price:450
     },
  ]

}
