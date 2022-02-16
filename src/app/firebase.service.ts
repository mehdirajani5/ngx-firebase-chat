import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private firestore:AngularFirestore,
    ) { }


  // createNewEmployee(Record){
  //   return this.firestore.collection('Employee').add(Record)
  // }

  getAllEmployees(){
    return this.firestore.collection('Employees').snapshotChanges();
  }
}
