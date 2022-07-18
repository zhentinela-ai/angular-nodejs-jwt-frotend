import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks = [
    {
      _id: null,
      name: "",
      description: ""
    }
  ];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.getPrivateTasks()
      .subscribe({
        next: res => {
          this.tasks = res;
          console.log(this.tasks);
        },
        error: err => console.error(err)
      })
  }

}
