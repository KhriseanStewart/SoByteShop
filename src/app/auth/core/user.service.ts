import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/compat/firestore'; // use compat if you use older API
import { AngularFireAuth } from '@angular/fire/compat/auth'; // same here
import { getAuth, onAuthStateChanged, updateProfile, User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private auth = getAuth();

  constructor(
    public db: AngularFirestore,
    public afAuth: AngularFireAuth
  ) { }

  getCurrentUser(): Promise<User> {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          resolve(user);
        } else {
          reject('No user logged in');
        }
      });
    });
  }

  updateCurrentUser(value: { name: string }) {
    const user = this.auth.currentUser;
    if (user) {
      return updateProfile(user, {
        displayName: value.name,
        photoURL: user.photoURL
      });
    } else {
      return Promise.reject('No user logged in');
    }
  }
}
