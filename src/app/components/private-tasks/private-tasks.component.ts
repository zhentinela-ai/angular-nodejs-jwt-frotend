import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.css']
})
export class PrivateTasksComponent implements OnInit {

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
