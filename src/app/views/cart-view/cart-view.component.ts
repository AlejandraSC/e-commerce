import { Component, OnInit } from "@angular/core";
import { VAT } from 'src/app/configurationValues';
import { SharedService } from 'src/app/service/shared.service';
import productsJson from "src/assets/products.json";

@Component({
  selector: "app-cart-view",
  templateUrl: "cart-view.component.html",
  styleUrls: ['cart-view.component.scss'],
})
export class CartViewComponent implements OnInit {
  products: any;
  totalPrice: number = 0;
  vat: number;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.products = productsJson;
    console.log(this.products)
    this.calculateTotalPrice();
    this.vat = VAT;
  }

  remove(i: number) {
    this.products.splice(i, 1);
    this.calculateTotalPrice()
  }

  calculateTotalPrice() {
    this.totalPrice = 0;
    if (this.products.length != 0) {
      for (let product of this.products) {
        let totalPriceProduct = 0;
        if (product.quantity != 0) {
          totalPriceProduct = product.net_price * product.quantity;
        }
        this.totalPrice += totalPriceProduct;
        this.totalPrice = Math.round(this.totalPrice * 100) / 100
      }
    }
  }

  calculateShipping() {
    if (this.totalPrice < 50) {
      return 20;
    } else if (this.totalPrice < 100) {
      return 10;
    } else {
      return 0
    }
  }

  calculateSubtotalAndShipping() {
    return Math.round((this.totalPrice + this.calculateShipping()) * 100) / 100;
  }

  notUndefinedValues(i: number) {
    if (this.products[i].quantity == undefined) {
      this.products[i].quantity = 0;
      this.calculateTotalPrice();
    }
  }

  calculateTotal() {
    return Math.round(((this.calculateSubtotalAndShipping() * this.vat / 100) + this.calculateSubtotalAndShipping()) * 100) / 100
  }
  sendPricesToSummary(){
    setTimeout(() => {
      let prices = [this.totalPrice, this.calculateShipping(), this.calculateSubtotalAndShipping(), this.vat, this.calculateTotal()];
      this.sharedService.sharedPriceAndProductsNotification.next([ prices,this.products]);
    });

  }
  calculateProductPrice(productPrice: number, quantity: number){
    return Math.round((productPrice * quantity) * 100) / 100;
  }
}
