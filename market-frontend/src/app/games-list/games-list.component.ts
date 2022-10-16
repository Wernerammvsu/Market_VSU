import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit, OnDestroy {
  @Input() games: any[] = [];
  @Input() events?: Observable<void>;
  private eventsSubscription?: Subscription;
  @Input() withDeleteBtns = false;

  constructor() { }

  ngOnInit(): void {
    this.eventsSubscription = this.events?.subscribe(() => this.withDeleteBtns = !this.withDeleteBtns);
  }

  ngOnDestroy() {
    this.eventsSubscription?.unsubscribe();
  }

  removeGame(game: any) {
    this.games = this.games.filter(g => g.id !== game.id);
    localStorage.setItem('games', JSON.stringify(this.games));
  }

}
