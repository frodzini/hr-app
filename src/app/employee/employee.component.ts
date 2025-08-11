import { Component, inject } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

@Component({  //do html dodatek jak by 
  selector: 'app-list-employees', 
  standalone: true, 
  imports: [CommonModule], // potrzebne do *ngFor
  templateUrl: './employee.component.html', 
  styleUrls: ['./employee.component.css'] 
})
export class ListEmployeesComponent { // Komponent do wyświetlania listy pracowników
  firestore = inject(Firestore); // To jest odwołanie do Firestore
  employees: any[] = []; // Przechowuje listę pracowników

  async ngOnInit() {
    const ref = collection(this.firestore, 'employees'); // To jest odwołanie do kolekcji 'employees' w bazie Firestore 
    const snapshot = await getDocs(ref);  // Pobiera dokumenty z kolekcji 'employees'
    this.employees = snapshot.docs.map(doc => doc.data()); // Mapuje dane pracowników
  }
}
