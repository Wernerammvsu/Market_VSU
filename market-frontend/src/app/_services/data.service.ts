import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  foundGames: any[] = [];
  showSearchResultSubject: Subject<boolean> = new Subject<boolean>();

  constructor() { }
}
