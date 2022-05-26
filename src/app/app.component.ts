import { Component } from '@angular/core';
import {ICurrency} from "./interfaces/currency";
import {CurrencyService} from "./services/api-services/currency.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency-converter';
  public currencies: ICurrency[] = [];

  constructor(private currencyService: CurrencyService) {
    currencyService.getCurrencies().subscribe((values) => this.currencies = values.slice(0, 3));
  }
}
