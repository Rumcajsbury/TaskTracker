import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onTaskDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter<Task>();
  faTimes = faTimes;
  constructor() {}

  onDelete(): void {
    this.onTaskDelete.emit(this.task.id);
  }

  onToggle(): void {
    this.onToggleReminder.emit(this.task);
  }
}
