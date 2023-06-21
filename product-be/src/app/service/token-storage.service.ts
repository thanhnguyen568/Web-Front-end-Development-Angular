import {Injectable} from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() {
  }

  getUser() {
    if (localStorage.getItem(USER_KEY) !== null) {
      return JSON.parse(localStorage.getItem(USER_KEY));
    } else {
      return JSON.parse(sessionStorage.getItem(USER_KEY));
    }
  }
}
