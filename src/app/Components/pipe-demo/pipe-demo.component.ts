import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent {
  title = 'Pipes Example';
  currentDate = new Date();
  price = 100.567;
  percent = 0.87;
  number = 1234.567;
  object = { name: 'John', age: 30, address: { street: '123 Main St', city: 'New York' } };
}
