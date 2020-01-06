export class Ticket {
  constructor(
    public id: string,
    public number: number,
    public title: string,
    public status: string,
    public priority: string,
    public imagem: string,
    public user: string,
    public assignedUser: string,
    public data: string,
    public changes: Array<string>
  ) {}
}
