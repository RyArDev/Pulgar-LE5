import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void{
    window.sessionStorage.clear();
    window.location.reload();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem('TOKEN_KEY');
    window.sessionStorage.setItem('TOKEN_KEY', token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem('TOKEN_KEY');
  }

  public saveUser(id: number): void {
    let strId = id.toString();
    window.sessionStorage.removeItem('USER_KEY');
    window.sessionStorage.setItem('USER_KEY', strId)
;  }

}