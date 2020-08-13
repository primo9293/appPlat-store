import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appPlat-store';
  // Introducción
  items = ['Ana', 'Carlos'];

  addItem(){
    this.items.push('Nuevo');
  }

  deleteItem(index: number){
    this.items.splice(index, 1);
  }
  //
}
