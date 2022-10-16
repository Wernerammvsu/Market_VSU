import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { GamesService } from 'src/app/_services/games.service';
import { Subject } from 'rxjs'

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  gamesOnSale: any[] = [];
  eventsSubject: Subject<void> = new Subject<void>();
  @Output() toggleCreationForm = new EventEmitter();
  @Input() withDeleteBtns = false;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.gamesOnSale = this.gamesService.getGamesOnSale();
  }

  toggleEditMode() {
    this.eventsSubject.next();
    this.toggleCreationForm.emit();
  }

}
