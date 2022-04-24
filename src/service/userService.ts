import { IUser } from '../interfaces/interfaces';
import UserModel from '../models/user';

export default class UserService {
  Model: UserModel;

  constructor() {
    this.Model = new UserModel();
  }

  create = async (user:IUser) => {
    const result = await this.Model.create(user);

    return result; 
  };
}