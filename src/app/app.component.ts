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
    // if it's not empty
    if (value !== '') {
      this.todoArray.push(value);
      console.log(this.todoArray);
    }
  }

  deleteItem(todo) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
      }
    }
  }
}
