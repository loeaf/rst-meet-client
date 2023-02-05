import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import PhraseGen from 'korean-random-words';
const phraseGen = new PhraseGen();
@Injectable({
  providedIn: 'root'
})
export class UtilesService {

  constructor() { }
  async getGeolocation() {
    return await Geolocation.getCurrentPosition();
  }

  async gernatePhrase() {
    return phraseGen.generatePhrase();
  }
}
