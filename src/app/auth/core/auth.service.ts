import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, TwitterAuthProvider, User, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const app = initializeApp(environment.firebase);
const auth = getAuth(app);

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor() {
    onAuthStateChanged(auth, (user) => {
      this.loggedIn = !!user;
    });
  }

  setLoggedIn(status: boolean) {
    this.loggedIn = status;
  }
  isAuthenticated(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      onAuthStateChanged(auth, (user) => {
        observer.next(!!user);
      });
    });
  }

  async doRegister(value: { email: string; password: string }) {
    return new Promise((resolve, reject) => {
      try {
        const res = createUserWithEmailAndPassword(auth, value.email, value.password)
            resolve(res);
            this.setLoggedIn(true);
            return res;
      } catch (err) {
        throw err;
      }
    });
  }

  async doLogin(value: { email: string; password: string }) {
    return new Promise((resolve, reject) => {
      try {
        const res = signInWithEmailAndPassword(auth, value.email, value.password)
            this.setLoggedIn(true);
            resolve(res);
        return res;
      } catch (err) {
        throw err;
      }
    });
  }

  // Example for Google sign-in
  async signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);
    this.setLoggedIn(true);
    return res
  }

  // Example for Twitter sign-in
  signInWithTwitter() {
    const provider = new TwitterAuthProvider();
    return signInWithPopup(auth, provider);
  }
}
