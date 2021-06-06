import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
@Component({
  selector: 'app-smart-coffee',
  templateUrl: './smart-coffee.component.html',
  styleUrls: ['./smart-coffee.component.css'],
})
export class SmartCoffeeComponent implements OnInit {
  constructor(private db: AngularFireDatabase) {}
  // getAll(): Observable<any> {
  //   this.distance = this.db.list('/distance');
  //   return this.distance.valueChanges();
  // }
  getDistance() {
    const dbRef = firebase.database().ref().child('distance');
    dbRef.on('value', (snap) => {
      var distance = snap.val();
      document.getElementById('distance').innerHTML = distance;
      if (distance == null) {
        distance == 0;
      }
    });
  }

  getFlowRate() {
    const dbRef = firebase.database().ref().child('flowRate');
    dbRef.on('value', (snap) => {
      var flowRate = snap.val();
      document.getElementById('flowRate').innerHTML = flowRate;
      if (flowRate == null) {
        flowRate == 0;
      }
    });
  }

  getLiquidQuantity() {
    const dbRef = firebase.database().ref().child('liquidQuantity');
    dbRef.on('value', (snap) => {
      var liquidQuantity = snap.val();
      document.getElementById('liquid').innerHTML = liquidQuantity;
      if (liquidQuantity == null) {
        liquidQuantity == 0;
      }
    });
  }

  ngOnInit(): void {}
}
