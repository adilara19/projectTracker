import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:5263/api/Projects';

  getProjects():Observable<Project[]>{
    return this.http.get<Project[]>(this.url);
  }

  getProjectByCategory(categoryID: number):Observable<Project[]>{

    return this.http.get<Project[]>(this.url+'/'+categoryID);
  }

  addProject(project: Project):Observable<Project>{
  //  let option{
  //      headers: {
  //        'Authorization': 'Bearer [TOKEN EKLENECEK]'
  //  }
  // }
    return this.http.post<Project>(this.url,project);
  }
}