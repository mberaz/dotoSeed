export class User {
    public Id: number;
    public FirstName: string;
      public LastName: string;
 public Email: string;
    constructor(id: number, FirstName: string, LastName: string, Email:string) {
        this.Id = id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email=Email;
    }
}