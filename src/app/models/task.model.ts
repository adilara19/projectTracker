export class Task {
  constructor(
    public id?: number,
    public name?: string,
    public expectedDate?: Date,
    public projectID?: number,
    public isDone?: Boolean
  ) {}
}
