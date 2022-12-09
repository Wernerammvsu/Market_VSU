import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/_services/data.service';
import { GamesService } from '../../_services/games.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  foundGames: any[] = [];
  showSearchResultObservable?: Observable<boolean>;
  private showSearchResultSubscription?: Subscription;
  showSearchResult = false;
  showCreationForm = false;
  reloadFlag = true;
  withDeleteBtns = false;
  newGame: any = {
    type: 'БАЗОВАЯ ИГРА',
    price: 0,
    discountPercent: 0
  };

  constructor(private gamesService: GamesService, private dataService: DataService) { }

  ngOnInit(): void {
    this.showSearchResultObservable = this.dataService.showSearchResultSubject.asObservable();
    this.showSearchResultSubscription = this.showSearchResultObservable
      ?.subscribe(value => {
        this.foundGames = this.dataService.foundGames;
        this.showSearchResult = value;
      });
    
  }

  ngOnDestroy() {
    this.showSearchResultSubscription?.unsubscribe();
  }

  toggleCreationForm(e: any) {
    this.showCreationForm = !this.showCreationForm;
  }

  async addNewGame() {
    await this.gamesService.addNewGame(this.newGame);
    this.withDeleteBtns = true;
    setTimeout(() => this.reloadFlag = false); 
    setTimeout(() => this.reloadFlag = true); 
  }

}
