import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCRwPp-CPTDJQSnJ7v1Ma2e3ZRSkTAYtQE',
      authDomain: 'udemy-recipe-8857e.firebaseio.com'
    });
  }
}
