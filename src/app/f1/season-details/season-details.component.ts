import { Component, OnInit, Input } from '@angular/core';

import { F1ResultWinnerModel } from 'src/app/f1/models/f1-result-winner.model';

@Component({
  selector: 'app-season-details',
  templateUrl: './season-details.component.html',
  styleUrls: ['./season-details.component.scss']
})
export class SeasonDetailsComponent implements OnInit {
  @Input() data: F1ResultWinnerModel;

  results: F1ResultWinnerModel[];

  constructor() { }

  ngOnInit() {

  }

}
