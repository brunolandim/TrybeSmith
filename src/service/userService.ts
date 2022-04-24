import { IUser } from '../interfaces/interfaces';
import UserModel from '../models/user';

export default class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  create = async (user:IUser) => {
    const result = await this.model.create(user);

    return result; 
  };
}