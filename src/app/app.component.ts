import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyC8faDdBNTthphIlwC3A-S_vUttjAkWfqw",
      authDomain: "openbooks-e0f10.firebaseapp.com",
      databaseURL: "https://openbooks-e0f10.firebaseio.com",
      projectId: "openbooks-e0f10",
      storageBucket: "",
      messagingSenderId: "216037221160",
      appId: "1:216037221160:web:278caafe39da4d9f"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
