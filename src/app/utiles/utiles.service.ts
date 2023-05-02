import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import PhraseGen from 'korean-random-words';
import { HttpClient } from '@angular/common/http';
const phraseGen = new PhraseGen();
@Injectable({
  providedIn: 'root'
})
export class UtilesService {
  constructor(private httpClient: HttpClient) { }
  static getGeolocation() {
    // 임시로 위치를 고정시킴
    if(false) {
      return new Promise((resolve, reject) => {
        // 126.497984, 33.488383 제주도
        // 127.28982174876, 36.479895749037 세종
        const p: any = {
          coords: {
            longitude: 127.28982174876,
            latitude: 36.479895749037
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

  static sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
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

  static getToken() {
    let Authorization = window.localStorage.getItem('token');
    return Authorization;
  }

  static getBearerToken() {
    let Authorization = window.localStorage.getItem('token');
    Authorization = `Bearer ${Authorization}`;
    return Authorization;
  }

  static moveLogin() {
    localStorage.clear();
    location.href = '/login';
  }

  static localStogareClear() {
    localStorage.clear();
  }

  static isLogin() {
    const token = window.localStorage.getItem('token');
    if(token) {
      return true;
    }
    return false;
  }

  static createQueryString (queryMap: Map<string, string>) {
    let query = '';
    queryMap.forEach((value, key) => {
      query += `${key}=${value}&`;
    });
    return query;
  }
}
