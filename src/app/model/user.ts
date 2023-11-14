export class User {
  constructor(
    public username: string,
    public email: string,
    public password: string,
    public city: string,
    public postalCode: string,
    public street: string
  ) {}
}
