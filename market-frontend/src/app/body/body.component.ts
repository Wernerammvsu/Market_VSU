import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../_services/data.service';
import { GamesService } from '../_services/games.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, AfterViewInit {
  searchInput = document.querySelector('.search input')!;
  searchHistoryHtml = document.getElementById("search-history-dropdown")!;
  searchQuery = '';
  searchHistory: string[] = [];
  showSearchHistory = false;
  cartCount$?: Observable<number>;

  constructor(private gamesService: GamesService, 
    private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.searchHistory = this.getSearchHistory();
    this.cartCount$ = this.gamesService.cartCount;
  }
  
  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.gamesService.updateCartCount();
    });
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
    this.router.navigateByUrl('/');
    setTimeout(async () => {
      this.showSearchHistory = false;
      this.dataService.foundGames = await this.gamesService.searchGames(this.searchQuery);
      this.dataService.showSearchResultSubject.next(true);
    });
  }

  resetState() {
    this.dataService.showSearchResultSubject.next(false);
    this.dataService.foundGames = [];
    this.showSearchHistory = false;
  }
}
