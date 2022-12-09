import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../_services/games.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  genreName?: string;
  games: any[] = [];

  constructor(private route: ActivatedRoute, private gamesService: GamesService) { }

  async ngOnInit(): Promise<void> {
    this.genreName = this.route.snapshot.queryParamMap.get('value')!;
    this.games = await this.gamesService.getGamesByGenre(this.genreName);
  }

}
