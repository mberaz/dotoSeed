export class Task {
    public Id: number;
    public Name: string;
    public IsDone: boolean;
    constructor(id: number, name: string, isDone: boolean) {
        this.Id = id;
        this.Name = name;
        this.IsDone = isDone;
    }

}