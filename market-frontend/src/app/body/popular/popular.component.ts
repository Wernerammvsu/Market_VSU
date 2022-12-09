import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/_services/games.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  gamesPopular: any[] = [];

  constructor(private gamesService: GamesService) { }

  async ngOnInit(): Promise<void> {
    this.gamesPopular = await this.gamesService.getPopularGames();
  }

}
