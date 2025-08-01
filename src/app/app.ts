import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
title() {
throw new Error('Method not implemented.');
}
  private firebaseService = inject(FirebaseService);

  ngOnInit(): void {}

  addTestEmployee() {
    const employee = {
      name: 'Jan Testowy',
      position: 'Frontend Developer',
      salary: 7000,
      dateAdded: new Date()
    };

    this.firebaseService.addEmployee(employee);
  }
}
