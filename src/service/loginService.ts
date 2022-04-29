import UserModel from '../models/user';
import { ILogin } from '../interfaces/interfaces';

export default class LoginService {
  ModelUser: UserModel;

  constructor() {
    this.ModelUser = new UserModel();
  }

  login = async (username:string, password:string):Promise<ILogin | null> => {
    const allUsers = await this.ModelUser.list();
    const getUser = allUsers.find((user) => user.username === username);

    if (!getUser) {
      return null; 
    }
    if (getUser.password !== password) { 
      return null; 
    }

    return getUser as ILogin;
  };
}