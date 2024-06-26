import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model'
import { projects } from '../models/mocks/projects.mock'
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent  implements OnInit{

  projects: Project[] = projects;
  word:string

  constructor(private route: ActivatedRoute, private projectService:ProjectsService){}

  ngOnInit(): void {
      this.route.params.subscribe((arg)=>{ 

        let observableProjects = arg['id'] != undefined ?
        this.projectService.getProjectByCategory(Number.parseInt(arg['id'])) : this.projectService.getProjects();

        observableProjects.subscribe((data)=>{
          this.projects = data;
        })

        console.log(arg['id']);
        
        //ActivatedRoute parametresinin params koleksiyonundaki bir değişikliğin karşı taraftaki bileşende de değişmesini istiyorsak bunun adı: Observer
        // Birden fazla bileşenin koleksiyona abone olması durumunda bütün aboneler gerçekleşen değişikliklerden haberdar olurlar. Abone olma: Subscribe, Haberdar olmaları için giden bildirim: Notification
      })
  }
}
