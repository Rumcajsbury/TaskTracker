import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task?: Task;
  @Output() onTaskDelete: EventEmitter<number> = new EventEmitter<number>();
  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {}
  onDelete(taskId: number): void {
    this.onTaskDelete.emit(taskId);
  }
}
