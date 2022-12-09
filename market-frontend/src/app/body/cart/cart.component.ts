import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/_services/games.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[] = [];

  get priceTotal() {
    return +this.cart.reduce((acc, game) => acc += game.price, 0).toFixed(2);
  }

  get discountPercentTotal() {
    return +this.cart.reduce((acc, game) => acc += game.price * game.discountPercent / 100, 0).toFixed(2);
  }

  get priceFinal() {
    return +(this.priceTotal - this.discountPercentTotal).toFixed(2);
  }

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.cart = this.gamesService.getGamesInCart();
  }

  removeFromCart(gameId: number) {
    this.cart = this.cart.filter(g => g.id != gameId);
  }

}
