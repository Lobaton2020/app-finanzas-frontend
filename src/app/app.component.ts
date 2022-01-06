import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  data: any[] = [];
  ngOnInit(){
    this.show();
  }
  show(){
    //traer datos del apo jsonplaceholder
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => this.data = json);
  }
}
