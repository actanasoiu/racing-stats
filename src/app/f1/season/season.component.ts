import { F1SeasonWinnerModel } from '../models/f1-season-winner.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {
  @Input() data: F1SeasonWinnerModel;

  constructor() { }

  ngOnInit() {
  }

}
