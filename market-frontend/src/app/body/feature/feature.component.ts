import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../_services/games.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  featureName?: string;
  games: any[] = [];

  constructor(private route: ActivatedRoute, private gamesService: GamesService) { }

  async ngOnInit(): Promise<void> {
    this.featureName = this.route.snapshot.queryParamMap.get('value')!;
    this.games = await this.gamesService.getGamesByFeature(this.featureName);
  }


}
