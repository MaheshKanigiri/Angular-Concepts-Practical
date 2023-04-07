import { Component } from '@angular/core';

interface User {
  name: string;
  email: string;
  isAdmin: boolean;
}
interface Item {
  name: string;
  age: number;
}
@Component({
  selector: 'app-directives-ex',
  templateUrl: './directives-ex.component.html',
  styleUrls: ['./directives-ex.component.css']
})

export class DirectivesExComponent {

  //NGIF
  user: User | null = null;
  username: string = ''
  //initailly set to null after clicking login button it gies below method
  // and sets value for user also checks admin privelage if its true enables delete button , if not
  //just shows details
  isLoggedIn: boolean = false;
  // Method to log in the user
  showLoginForm(): void {
    // Code to show login form
    this.user = { name: 'John Doe', email: 'johndoe@example.com', isAdmin: true };
    this.isLoggedIn = true;
    this.username = this.user.name;
  }

  // Method to delete the user
  deleteUser(): void {
    // Code to delete the user
    this.user = null;
  }

  login() {
    // Perform login logic here
    this.isLoggedIn = true;
  }

  logout() {
    // Perform logout logic here
    this.isLoggedIn = false;
  }

  //NGFOR
  items: Item[] = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 40 },
    { name: 'Alice', age: 22 }
  ];

  //NGSWITCH
  color: string = '';

  //NGSTYLE
  bgColor = '#007bff';
  textColor = '#fff';

  toggleColors() {
    if (this.bgColor === '#007bff') {
      this.bgColor = '#28a745';
      this.textColor = '#fff';
    } else {
      this.bgColor = '#007bff';
      this.textColor = '#fff';
    }
  }




}
