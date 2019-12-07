import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  items;
  shippingCosts;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
      this.items = this.cartService.getItems();

      this.checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
      });
   }

  onSubmit(customerData){
    if(this.items.length > 0){
      window.alert('Your order has been submitted. Name: ' + customerData.name + ' Address: ' + customerData.address);

      this.items = this.cartService.clearCart();
      this.checkoutForm.reset();
    } else {
       window.alert('Go to product page and choose what you want to buy.')
    }
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}