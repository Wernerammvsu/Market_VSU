import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GamesService } from 'src/app/_services/games.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  topGames: any[] = [];
  selectedGame: any = {};

  constructor(private gamesService: GamesService) { }

  async ngOnInit(): Promise<void> {
    this.topGames = await this.gamesService.getTopGames();
    this.selectedGame = this.topGames[0];
  }

  ngAfterViewInit(): void {
  }

}
