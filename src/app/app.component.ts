import { Component } from '@angular/core';
import { SharedService } from './service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'checkoutMetroMarkets';
  showTitleAndButton: boolean = true;
  data: any;

  constructor(private sharedService: SharedService) {
    this.sharedService.observableShowImageNotification.subscribe(result$ => {
      window.scrollTo(0,0)
      this.showTitleAndButton = result$;
    })
    this.data = {
      datasets: [{
        data: [
          25,
          15,
          7,
          3,
          14
        ],
        backgroundColor: [
          "#304268",
          "#c1c7d1",
          "#FFCE56",
          "#8ccbea",
          "#ff0000"
        ],
        label: 'Solds'
      }],
      labels: [
        "Metro markets",
        "Multimarket",
        "Intershop",
        "Shopping daily",
        "Shop today"
      ]
    }
  }

  ngOninit(){
  }

}