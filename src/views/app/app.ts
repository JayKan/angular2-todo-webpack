import { Component, ViewEncapsulation } from '@angular/core';
import { TodoStore, Todo } from '../../core/store';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  template:require('./app.html'),
  styles: [
    require('./app.scss')
  ]
})
export class App {

  newTodoText: string = '';

  constructor(private _store: TodoStore) {}

  addTodo(): void {
    if (this.newTodoText.trim().length) {
      this._store.add(this.newTodoText);
      this.newTodoText = '';
    }
  }

  editTodo(todo: Todo): void {
    todo.editing = true;
  }

  remove(todo: Todo): void {
    this._store.remove(todo);
  }

  stopEditing(todo: Todo, editedTitle: string): void {
    todo.title = editedTitle;
    todo.editing = false;
  }

  updateEditingTodo(todo: Todo, editedTitle: string): void {
    editedTitle = editedTitle.trim();
    todo.editing = false;

    if (editedTitle.length === 0) {
      return this._store.remove(todo);
    }
    todo.title = editedTitle;
  }

  cancelEditingTodo(todo: Todo): void {
    todo.editing = false;
  }

  toggleCompletion(todo: Todo): void {
    this._store.toggleCompletion(todo);
  }

  removeCompleted(): void {
    this._store.removeCompleted();
  }
}