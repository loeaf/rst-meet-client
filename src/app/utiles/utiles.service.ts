import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import PhraseGen from 'korean-random-words';
const phraseGen = new PhraseGen();
@Injectable({
  providedIn: 'root'
})
export class UtilesService {

  constructor() { }
  static getGeolocation() {
    if(true) {
      return new Promise((resolve, reject) => {
        const p: any = {
          coords: {
            longitude: 127.28782174876,
            latitude: 36.477895749037
          }
        }
        resolve(p)
      });
    }
    return Geolocation.getCurrentPosition();

  }

  async gernatePhrase() {
    return phraseGen.generatePhrase();
  }

  static displayedAt(createdAt: any) {
    const date: any = new Date();
    const milliSeconds = date - createdAt;
    const seconds = milliSeconds / 1000
    if (seconds < 60) return `방금 전`
    const minutes = seconds / 60
    if (minutes < 60) return `${Math.floor(minutes)}분 전`
    const hours = minutes / 60
    if (hours < 24) return `${Math.floor(hours)}시간 전`
    const days = hours / 24
    if (days < 7) return `${Math.floor(days)}일 전`
    const weeks = days / 7
    if (weeks < 5) return `${Math.floor(weeks)}주 전`
    const months = days / 30
    if (months < 12) return `${Math.floor(months)}개월 전`
    const years = days / 365
    return `${Math.floor(years)}년 전`
  }

  static tokenCheck(error: any) {
    if(error.status === 401) {
      localStorage.clear();
      location.href = '/login';
    }
  }

  static createQueryString (queryMap: Map<string, string>) {
    let query = '';
    queryMap.forEach((value, key) => {
      query += `${key}=${value}&`;
    });
    return query;
  }
}
