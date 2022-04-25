import LoginModel from '../models/login';
import UserModel from '../models/user';
import { ILogin } from '../interfaces/interfaces';

export default class LoginService {
  ModelLogin: LoginModel;

  ModelUser: UserModel;

  constructor() {
    this.ModelLogin = new LoginModel();
    this.ModelUser = new UserModel();
  }

  login = async (username:string, password:string):Promise<ILogin | null> => {
    const allUsers = await this.ModelUser.list();
    const getUser = await allUsers.find((user) => user.username === username);

    if (!getUser) {
      return null; 
    }
    if (getUser.password !== password) { 
      return null; 
    }

    return getUser as ILogin;
  };
}
