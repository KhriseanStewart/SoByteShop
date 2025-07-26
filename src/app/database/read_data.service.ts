import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, TwitterAuthProvider, User, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { addDoc, collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { title } from 'process';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { user } from 'rxfire/auth';

const app = initializeApp(environment.firebase);
const db = getFirestore(app);

@Injectable({
  providedIn: 'root'
})
export class ReadDataService {
  userUid: String | null = null;
  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userUid = user.uid;
        console.log('User UID:', this.userUid);
      } else {
        this.userUid = null;
        console.log('No user logged in');
      }
    })
  }

  async readData() {
    try {
      const collectionRef = collection(db, 'ads');
      const querySnap = await getDocs(collectionRef);

      const items = querySnap.docs.map(doc => ({
        id: doc.id,
        header: doc.data()['header'],
        subtext: doc.data()['subtext'],
        imageUrl: doc.data()['imageUrl'],
        date: doc.data()['date']
      }));
      return items;
    } catch (e) {
      console.log("Error fetching Listings: ", e);
      return;
    }
  }

  async readUserData() {
    try {
      const collectionRef = doc(db, 'users', this.userUid as string);
      const querySnap = await getDoc(collectionRef);

      const data = querySnap.data();
      const item = {
        email: data!['email'],
        name: data!['name'],
        profilePic: data!['profilePic'],
        telephone: data!['telephone'],
        timestamp: data!['timestamp'],
        username: data!['username'],
      };

      console.log('Data', item.name);
      return item;
    } catch (e) {
      console.log("Error fetching Listings: ", e);
      return;
    }
  }

  async readProductData() {
    try {
      const collectionRef = collection(db, 'products');
      const queryData = await getDocs(collectionRef);

      const product = queryData.docs.map(doc => ({
        id: doc.id,
        title: doc.data()['name'],
        imageUrl: doc.data()['imageUrl'],
        location: doc.data()['location'],
        price: doc.data()['price'],
        productId: doc.data()['productId'],
        ownerId: doc.data()['ownerId'],
      }));

      console.log('data type', product);
      return product;
    } catch (e) {
      console.log('Error getting products:', e);
      return;
    }
  }
}
