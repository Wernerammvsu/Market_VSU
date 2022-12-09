import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/_services/games.service';

@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.css']
})
export class FreeComponent implements OnInit {
  gamesFree: any[] = [];

  constructor(private gamesService: GamesService) { }

  async ngOnInit(): Promise<void> {
    this.gamesFree = await this.gamesService.getFreeGames();
  }

}
