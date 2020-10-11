import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  userName$ = new EventEmitter<string>();

  constructor() {}
}
