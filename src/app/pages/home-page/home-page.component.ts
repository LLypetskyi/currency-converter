import {Component, Input, OnInit} from '@angular/core';
import {ICurrency} from "../../interfaces/currency";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @Input() currencies: ICurrency[] = [];
  public currencyFromAmount: string = '';
  public currencyToAmount: string = '';
  public selectedFromCurrency: ICurrency = <ICurrency>{};
  public selectedToCurrency: ICurrency = <ICurrency>{};

  constructor() { }

  ngOnInit(): void {
  }

  onChangeFromCurrency(value: ICurrency) {
    this.selectedFromCurrency = value;
  }

  onChangeToCurrency(value: ICurrency) {
    this.selectedToCurrency = value;
  }



}
