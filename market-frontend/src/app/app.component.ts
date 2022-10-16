import { Component, OnInit } from '@angular/core';
import { GamesService } from './_services/games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'market-frontend';

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    localStorage.setItem('games', JSON.stringify(this.gamesService.games));
  }
}
