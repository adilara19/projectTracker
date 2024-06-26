import { AfterContentChecked, Component, Input, OnInit} from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit, AfterContentChecked{
  @Input('currentProject') project: Project;

  incompletedTasksCount?: number = 0;
  tasksFound: Boolean;

  ngOnInit(): void {
  this.incompletedTasksCount = this.project.tasks?.filter(t=>!t.isDone).length;
  }

  ngAfterContentChecked(): void {
    this.incompletedTasksCount = this.project.tasks?.filter(t=>!t.isDone).length;   
    this.tasksFound = this.incompletedTasksCount != undefined && this.incompletedTasksCount > 0;
  }
}
