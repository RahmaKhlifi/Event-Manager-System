import { Injectable } from '@angular/core';
import { BaseURL } from '../shared/base-url';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public BaseURL = '';

  private authstalker$ = new BehaviorSubject<boolean>(false);
  authObserver$ : Observable<boolean> = this.authstalker$.asObservable();
  constructor() { }

  public login(email: string, password: string): boolean {
    this.authstalker$.next(false);
    if (email === 'admin@admin' && password === 'admin123') {
      
      this.authstalker$.next(true);
      
    }
    return this.authstalker$.getValue();
  }

  public logout(){
    this.authstalker$.next(false);
  }

  isloggedIn(): boolean {
    return this.authstalker$.getValue();
  }

  

}
