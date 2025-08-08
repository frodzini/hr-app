import { Component } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
constructor(private firestore: Firestore) {}
   async handleSubmit() {
const ref = collection(this.firestore, 'employees');
    const docRef = await addDoc(ref,{name:this.profileForm.value.name,email:this.profileForm.value.email} );
    alert('✅ Dodano dokument o ID:' + docRef.id);
}
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

}






