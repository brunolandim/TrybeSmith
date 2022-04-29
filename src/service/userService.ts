import { IUser } from '../interfaces/interfaces';
import UserModel from '../models/user';

export default class UserService {
  Model: UserModel;

  constructor() {
    this.Model = new UserModel();
  }

  list = async ():Promise<IUser[]> => {
    const allUsers = await this.Model.list();

    return allUsers;
  };

  create = async (user:IUser):Promise<void> => {
    const result = await this.Model.create(user);

    return result; 
  };

  findUser = async (username:string):Promise<IUser[] | null> => {
    const findUser = await this.Model.findUser(username);
    if (!findUser) {
      return null;
    }
    return findUser as IUser[];
  };
}