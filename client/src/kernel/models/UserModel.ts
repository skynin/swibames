export default class UserModel {

  public isAuth: boolean = false
  public id: string = '<none>'

  login(secID?: string) : boolean {return true}

  logout() {}
}