import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICurrency} from "../../interfaces/currency";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpClient: HttpClient) { }

  public getCurrencies(): Observable<ICurrency[]> {
    const url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';
    return this.httpClient.get(url).pipe(map(currencies => this.mapCurrencies(currencies)));
  }

  public mapCurrencies(currencies: any): ICurrency[] {
    return currencies.map((currency: any) => this.mapCurrency(currency));
  }

  public mapCurrency(json: any): ICurrency {
    return <ICurrency> {
      name: json['ccy'],
      buy: json['buy'],
      sale: json['sale'],
    }
  }
}
