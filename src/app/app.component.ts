import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tutorial';
  todoArray = [];

  addTodo(value) {
    // console.log('addTodo');
    this.todoArray.push(value);
    console.log(this.todoArray);
  }

  deleteItem(todo) {
    // console.log('deleteItem');
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
      }
    }
  }
}
