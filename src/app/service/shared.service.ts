import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
providedIn: 'root'
})
export class SharedService {


    sharedPriceAndProductsNotification = new Subject<[number[], any[]]>();
    observablePriceAndProductsNotification = this.sharedPriceAndProductsNotification.asObservable();

    sharedShowImageNotification = new Subject<boolean>();
    observableShowImageNotification = this.
    sharedShowImageNotification.asObservable();
}