import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../_services/games.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  game: any = {};
  addedToCart = false;

  constructor(private route: ActivatedRoute, private gamesService: GamesService) { }

  async ngOnInit(): Promise<void> {
    const gameId = +this.route.snapshot.paramMap.get('id')!;
    this.game = await this.gamesService.getGame(gameId);
    this.game.genres = this.game.genres.replace(' ', '').split(',');
    this.game.features = this.game.features.replace(' ', '').split(',');
  }

  addToCart(gameId: number) {
    this.gamesService.addToCart(gameId);
    this.addedToCart = true;
  }

  removeFromCart(gameId: number) {
    this.gamesService.removeFromCart(gameId);
    this.addedToCart = false;
  }

}
