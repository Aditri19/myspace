import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-tasklist',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tasklist.html',
  styleUrl: './tasklist.scss',
})
export class Tasklist {
  taskForm = new FormGroup ({
    task: new FormControl(''),
  });
  tasklist: string[] = [];

  submitTask() {
    console.log('Task submitted:', this.taskForm.value.task);
    this.tasklist.push(this.taskForm.value.task || '');
    this.taskForm.reset();
  }

  // updateTask() {
  //   this.taskForm.patchValue({ task: 'Updated Task' });
  // }
}
