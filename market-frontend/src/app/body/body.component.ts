import { Component, OnInit } from '@angular/core';
import { GamesService } from '../_services/games.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  searchInput = document.querySelector('.search input')!;
  searchHistoryHtml = document.getElementById("search-history-dropdown")!;
  searchQuery = '';
  searchHistory: string[] = [];
  showSearchHistory = false;
  foundGames: any[] = [];
  showSearchResult = false;

  showCreationForm = false;
  newGame: any = {
    type: 'БАЗОВАЯ ИГРА',
    price: 0,
    discount: 0
  };

  reloadFlag = true;
  withDeleteBtns = false;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.searchHistory = this.getSearchHistory();
  }

  onFocus(event: any) {
    this.showSearchHistory = true;
  }

  onFocusOut(event: any) {
    this.showSearchHistory = false;
  }

  onKeypress(event: any) {
    if (event.code === 'Enter') {
      this.searchQuery = event.target.value;
      if (this.searchQuery === '') {
        this.resetState();
        return;
      }
      this.searchHistory = this.searchHistory.filter(item => item !== this.searchQuery);
      this.searchHistory.unshift(this.searchQuery);
      this.saveSearchHistory();
      this.searchGames();
    }
  }

  chooseSearchOption(event: any, option: string) {
    event.preventDefault();
    this.searchQuery = option;
    if (this.searchQuery === '') {
      this.resetState();
      return;
    }
    this.searchGames();
  }

  deleteSearchOption(event: any, index: number) {
    event.preventDefault();
    this.searchHistory.splice(index, 1);
    this.saveSearchHistory();
  }

  getSearchHistory(): string[] {
    return JSON.parse(localStorage.getItem("searchHistory")!) || [];
  }

  saveSearchHistory() {
    localStorage.setItem("searchHistory", JSON.stringify(this.searchHistory));
  }

  searchGames() {
    this.showSearchHistory = false;
    this.foundGames = this.gamesService.searchGames(this.searchQuery);
    this.showSearchResult = true;
  }

  resetState() {
    this.showSearchResult = false;
    this.foundGames = [];
    this.showSearchHistory = false;
  }

  toggleCreationForm(e: any) {
    this.showCreationForm = !this.showCreationForm;
  }

  addNewGame() {
    this.gamesService.addNewGame(this.newGame);
    this.withDeleteBtns = true;
    setTimeout(() => this.reloadFlag = false); 
    setTimeout(() => this.reloadFlag = true); 
  }
}
