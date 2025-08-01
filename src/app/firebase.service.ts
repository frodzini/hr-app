import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: Firestore) {}

  async addEmployee(employee: any) {
    const ref = collection(this.firestore, 'employees');
    const docRef = await addDoc(ref, employee);
    console.log('✅ Dodano dokument o ID:', docRef.id);
  }
}
