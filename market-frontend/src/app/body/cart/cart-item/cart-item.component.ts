import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { GamesService } from 'src/app/_services/games.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() game: any;
  @Output() removeFromCartEmitter = new EventEmitter();;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
  }

  removeFromCart() {
    this.gamesService.removeFromCart(this.game.id);
    this.removeFromCartEmitter.emit(this.game.id);
  }

}
