import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { FullDetails } from '../fullDetails';
import { TaskProfile } from '../taskProfile';

@Component({
  selector: 'app-task-tracker',
  templateUrl: './task-tracker.component.html',
  styleUrls: ['./task-tracker.component.css']
})
export class TaskTrackerComponent implements OnInit {
  taskInfo = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    task: new FormControl(),
    deadline: new FormControl(),
  });
tasks: Array<TaskProfile> = [];
f1:boolean = false;
  constructor() { }
msg:string = "";
  ngOnInit(): void {
  }
  enterTask(){
    let task1:TaskProfile = new TaskProfile(this.taskInfo.value.id,
      this.taskInfo.value.name,this.taskInfo.value.task,this.taskInfo.value.deadline);
    this.tasks.push(task1);
    this.taskInfo.reset();
    this.f1 = true;
  }

}
