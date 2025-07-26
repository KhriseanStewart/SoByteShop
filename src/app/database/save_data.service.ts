import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, TwitterAuthProvider, User, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const app = initializeApp(environment.firebase);
const db = getFirestore(app);

@Injectable({
  providedIn: 'root'
})
export class SaveDataService {
  constructor() { }

  async uploadData(data: any) {
    try {
      const collectionRef = collection(db, 'users')

      const docRef = await addDoc(collectionRef, data,);
      console.log(docRef.id);
    } catch (e) {
      console.log("Error happened",e);
    }
  }
}
