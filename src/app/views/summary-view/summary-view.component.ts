import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';

interface Options {
  name: string,
  codeOption: number
}

@Component({
  selector: 'app-summary-view',
  templateUrl: 'summary-view.component.html',
  styleUrls: ['summary-view.component.scss'],
})
export class SummaryViewComponent implements OnInit {
  products: any;
  prices: number[] = [];
  displayMaximizableShipping: boolean = false;
  displayMaximizableBilling: boolean = false;
  displayMaximizableDialogPayment: boolean = false;
  displayMaximizableDialogDone: boolean = false;
  name: string;
  street: string;
  postalCode: number;
  city: string;
  country: string;
  billName: string;
  billStreet: string;
  billPostalCode: number;
  billCity: string;
  billCountry: string;
  cardholderName: string;
  cardNumber: number;
  cvv: number;
  expirationDate: number;
  directions: Options[];
  selectedDirection: Options;
  showDialog: boolean = false;
  sameDirection: boolean = false;

  constructor(private sharedService: SharedService,
    private router: Router) {
    this.directions = [{ name: "Same as shipping address", codeOption: 1 }, { name: "Diferent address", codeOption: 2 }]
  }

  ngOnInit(): void {
    
    this.sharedService.observablePriceAndProductsNotification.subscribe(result$ => {
      window.scrollTo(0,0)
      this.prices = result$[0];
      this.products = result$[1];
      console.log(result$[1])
    });
  }
  showMaximizableDialogShipping() {
    this.displayMaximizableShipping = !this.displayMaximizableShipping;
  }

  showMaximizableDialogBilling() {
    this.displayMaximizableBilling = !this.displayMaximizableBilling;
  }

  addDifferentAddress() {
    if (this.selectedDirection.codeOption === this.directions[1].codeOption) {
      this.showDialog = true;
    } else {
      this.showDialog = false;
    }
    if (this.selectedDirection.codeOption === this.directions[0].codeOption) {
      this.sameDirection = true;
    } else {
      this.sameDirection = false;
    }
  }

  showMaximizableDialogPayment () {
    this.displayMaximizableDialogPayment = !this.displayMaximizableDialogPayment;
  }

  showMaximizableDialogDone() {
    this.displayMaximizableDialogDone = !this.displayMaximizableDialogDone;

  }

  goHome() {
    this.router.navigate(['']);
    this.sharedService.sharedShowImageNotification.next(true);
  }
}
