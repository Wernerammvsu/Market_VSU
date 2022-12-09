import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private serverUrl = 'https://localhost:7280';
  private games: any[] = [];

  constructor(private httpClient: HttpClient) {
    this.getGames().then(data => this.games = data)
   }

  private _cart: number[] = [];
  private _cartCountSubject = new Subject<number>();

  async getGames() {
    return await this.httpClient.get(`${this.serverUrl}/games/all`).toPromise() as any[];
  }

  get cart(): number[] {
    const cart = JSON.parse(localStorage.getItem("cart")!) || this._cart;
    this._cart = cart;
    return cart;
  }

  get cartCount(): Observable<number> {
    return this._cartCountSubject.asObservable();
  }

  async getTopGames() {
    return await this.httpClient.get(`${this.serverUrl}/games/top`).toPromise() as any[];
  }

  async getGamesOnSale() {
    return await this.httpClient.get(`${this.serverUrl}/games/sale`).toPromise() as any[];
  }

  async searchGames(query: string) {
    return await this.httpClient.get(`${this.serverUrl}/games/search?query=${query}`).toPromise() as any[];
  }

  async addNewGame(newGame: any) {
    // const games = this.games;
    // newGame.id = games[games.length - 1].id + 1;
    // games.push(newGame);
    // localStorage.setItem('games', JSON.stringify(games));
    
    await this.httpClient.post(`${this.serverUrl}/games`, newGame).toPromise();
  }

  async getGame(id: number) {
    return await this.httpClient.get(`${this.serverUrl}/games/${id}`).toPromise();
  }

  addToCart(gameId: number) {
    const cart = this.cart;
    cart.push(gameId);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.updateCartCount();
  }

  removeFromCart(gameId: number) {
    let cart = this.cart;
    cart = cart.filter(id => id != gameId);
    localStorage.setItem('cart', JSON.stringify(cart))
    this.updateCartCount();
  }

  isInCart(gameId: number) {
    return this.cart.includes(gameId);
  }

  updateCartCount() {
    this._cartCountSubject.next(this.cart.length);
  }

  getGamesInCart() {
    const ids = this.cart;
    return this.games.filter(g => ids.includes(g.id));
  }

  async getPopularGames() {
    return await this.httpClient.get(`${this.serverUrl}/games/popular`).toPromise() as any[];
  }

  async getFreeGames() {
    return await this.httpClient.get(`${this.serverUrl}/games/free`).toPromise() as any[];
  }

  async getGamesByGenre(genreName: string) {
    return await this.httpClient.get(`${this.serverUrl}/games/genre/${genreName}`).toPromise() as any[];
  }

  async getGamesByFeature(featureName: string) {
    return await this.httpClient.get(`${this.serverUrl}/games/feature/${featureName}`).toPromise() as any[];
  }

  async deleteGame(id: number) {
    await this.httpClient.delete(`${this.serverUrl}/games/${id}`).toPromise();
  }
}