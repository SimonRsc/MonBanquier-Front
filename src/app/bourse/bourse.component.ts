import {Component, OnDestroy, OnInit} from '@angular/core';
import {BourseService} from "../services/bourse.service";
import {Observable} from "rxjs";
import {Stock} from "../model/stock.model";

@Component({
  selector: 'app-bourse',
  templateUrl: './bourse.component.html',
  styleUrls: ['./bourse.component.scss']
})
export class BourseComponent implements OnInit, OnDestroy{
  portfolioObservable = new Observable();
  portfolio: Array<Stock>;
  constructor(private bourseService: BourseService) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

}
