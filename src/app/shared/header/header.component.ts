import {Component, Input, OnInit} from '@angular/core';
import {CurrencyService} from "../../services/api-services/currency.service";
import {ICurrency} from "../../interfaces/currency";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() currencies: ICurrency[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
