import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {


  //property binding
  link = 'https://www.example.com';
  text = 'Click me!';
  isDisabled = true;
  constructor() {
    //this makes once awake is active after some time awake is disabled
    setTimeout(() => {
      this.isDisabled = false;
    }, 4000);
  }
  //string interpolation
  user: any = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA'
    }
  };

  //property binding
  employees = [{
    name: 'John Doe',
    position: 'Manager',
    department: 'Sales',
    color: 'blue',
    isBold: true,
    isItalic: false,
    fontWeight: 'normal'
  },
  { name: 'Jane Smith', position: 'Supervisor', department: 'Marketing', color: 'green', isBold: false, isItalic: true, fontWeight: 'bold' },
  { name: 'Bob Johnson', position: 'Associate', department: 'Accounting', color: 'red', isBold: true, isItalic: true, fontWeight: 'normal' }];


  //string interpolation
  get fullName() {
    return `${this.user.firstName} ${this.user.lastName}`;
  }

  //event binding
  handleClick() {
    alert('Added To Cart Successfully!');
  }
  name = 'Chocolates';
  price = 10;
  quantity = 1;
  target=''
  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  increment() {
    this.quantity++;
  }

  onInputChange(event: Event) {
    this.target=(<HTMLInputElement>event.target).value;
    //going to assign input value to target the above code works like two way binding now what ever we enter it
    //reflects on both ts and html
  }

  //two way binding
  Name='Biryani'
  Email='Jack@ex.com'
  onSubmit() {
    alert('Name: ' + this.Name + '\nEmail: ' + this.Email);
  }

}

