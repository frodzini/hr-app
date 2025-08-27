import { Component, inject } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { doc, deleteDoc } from '@angular/fire/firestore';


@Component({  //do html dodatek jak by 
  selector: 'app-list-employees', 
  standalone: true, 
  imports: [CommonModule], // potrzebne do ngFor 
  templateUrl: './employee.component.html', 
  styleUrls: ['./employee.component.css'] 
})
export class ListEmployeesComponent {
[x: string]: any; // Komponent do wyświetlania listy pracowników
  firestore = inject(Firestore); // To jest odwołanie do Firestore 
  employees: any[] = []; // Przechowuje listę pracowników

  async ngOnInit() {
    const ref = collection(this.firestore, 'employees'); // To jest odwołanie do kolekcji 'employees' w bazie Firestore 
    const snapshot = await getDocs(ref);  // Pobiera dokumenty z kolekcji 'employees'
    this.employees = snapshot.docs.map(doc => doc.data()); // Mapuje dane pracowników
    this.employees = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Dodaje id do danych pracowników 
    console.log(this.employees); // Wyświetla listę pracowników w konsoli
  }
  deleteEmployee(id: string) {
  const docRef = doc(this.firestore, 'employees', id); // wskazuje na konkretny dokument po id
  deleteDoc(docRef) // usuwa ten dokument z Firestore
    .then(() => {
      // po usunięciu aktualizujemy listę lokalnie, żeby zniknął z ekranu
      this.employees = this.employees.filter(emp => emp.id !== id);
      console.log(`Usunięto pracownika o id: ${id}`);
    })
    .catch(error => { //łapie błąd
      console.error('Błąd podczas usuwania pracownika:', error);  //wyświetla błąd w konsoli
    
    
    });
}
   viewDetails(id: string) {
      console.log(`Wyświetl szczegóły pracownika o id: ${id}`);
   
    }

  }