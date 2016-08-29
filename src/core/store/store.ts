import { Injectable } from '@angular/core';

export class Todo {
  completed: boolean;
  editing: boolean;

  private _title: string;
  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value.trim();
  }

  constructor(title: string) {
    this.completed = false;
    this.editing = false;
    this.title = title.trim();
  }
}

@Injectable()
export class TodoStore {
  todos: Array<Todo>;

  constructor() {
    let persistedTodos = JSON.parse(localStorage.getItem('angular2-todo-webpack') || '[]');
    this.todos = persistedTodos.map((todo: {_title: string, completed: boolean }) => {
      let ret = new Todo(todo._title);
      ret.completed = todo.completed;
      return ret;
    });
  }

  allCompleted(): boolean {
    return this.todos.length === this.getCompleted().length;
  }

  setAllTo(completed: boolean): void {
    this.todos.forEach((t: Todo) => t.completed = completed);
    this._updateStore();
  }

  removeCompleted(): void {
    this.todos = this._getWithCompleted(false);
    this._updateStore();
  }

  getRemaining() {
    return this._getWithCompleted(false);
  }

  getCompleted() {
    return this._getWithCompleted(true);
  }

  toggleCompletion(todo: Todo): void {
    todo.completed = !todo.completed;
    this._updateStore();
  }

  remove(todo: Todo): void {
    this.todos.splice(this.todos.indexOf(todo), 1);
    this._updateStore();
  }

  add(title: string): void {
    this.todos.push(new Todo(title));
    this._updateStore();
  }

  private _updateStore(): void {
    localStorage.setItem('angular2-todo-webpack', JSON.stringify(this.todos));
  }

  private _getWithCompleted(completed: boolean) {
    return this.todos.filter((todo: Todo) => todo.completed === completed);
  }

}