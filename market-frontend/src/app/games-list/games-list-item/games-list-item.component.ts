import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GamesService } from '../../_services/games.service';

@Component({
  selector: 'app-games-list-item',
  templateUrl: './games-list-item.component.html',
  styleUrls: ['./games-list-item.component.css']
})
export class GamesListItemComponent implements OnInit {
  @Input() game: any;
  @Input() withDeleteBtn = false;
  @Output() removeGameEmitter = new EventEmitter();
  addedToCart = false;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.addedToCart = this.gamesService.isInCart(this.game.id);
  }

  async removeGame() {
    this.removeGameEmitter.emit(this.game);
    await this.gamesService.deleteGame(this.game.id);
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
