import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model'
import { projects } from '../models/mocks/projects.mock'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent  implements OnInit{

  projects: Project[] = projects;
  word:string

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
      this.route.params.subscribe((arg)=>{ 
        //ActivatedRoute parametresinin params koleksiyonundaki bir değişikliğin karşı taraftaki bileşende de değişmesini istiyorsak bunun adı: Observer
        // Birden fazla bileşenin koleksiyona abone olması durumunda bütün aboneler gerçekleşen değişikliklerden haberdar olurlar. Abone olma: Subscribe, Haberdar olmaları için giden bildirim: Notification
        console.log(arg['id']);
        if (arg['id'] != undefined){
          let id : number = Number.parseInt(arg['id']);
          this.projects = projects.filter(pr => pr.categoryID == id);
        }
      })
  }
}
