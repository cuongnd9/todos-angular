import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() changeStatus: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() removeTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  isHovered = false;
  isEditing = false;

  constructor() {}

  ngOnInit() {}

  changeTodoStatus() {
    this.changeStatus.emit({
      ...this.todo,
      isCompleted: !this.todo.isCompleted
    });
  }

  submitEdit(event: KeyboardEvent) {
    event.preventDefault();
    if (event.key === 'Enter' ) {
      this.editTodo.emit(this.todo);
      this.isEditing = false;
    }
  }

  deleteTodo() {
    this.removeTodo.emit(this.todo);
  }
}
