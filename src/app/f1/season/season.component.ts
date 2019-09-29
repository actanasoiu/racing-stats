import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/reducers/app.reducer';
import * as F1Actions from '../../f1/store/f1.actions';
import { Observable } from 'rxjs';
import { F1SeasonWinnerModel } from './../models/f1-season-winner.model';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {
  @Input() data: F1SeasonWinnerModel;

  selectedSeason$: Observable<F1SeasonWinnerModel>;

  constructor(
    private store: Store<fromApp.AppState>,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.selectedSeason$ = this.store.select(store => store.f1.selectedSeason);
  }

  onSeasonSelected() {
    this.store.dispatch(new F1Actions.SelectSeason(this.data));
    this.router.navigate([this.data.season], { relativeTo: this.route });
  }

}
