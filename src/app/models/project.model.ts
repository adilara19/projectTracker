import { Task } from "./task.model";

export class Project {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public categoryID?: number,
    public startDate?: Date,
    public completedPercentage?: number,
    public tasks?: Task[]
  ) {}
}
