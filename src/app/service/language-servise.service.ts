import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageServiseService {
  public langugeEvent = new EventEmitter<boolean>();

  constructor() {}
}
