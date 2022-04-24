import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/interfaces';
import connection from './connection';

export default class UserModel {
  private connection:Pool;

  constructor() {
    this.connection = connection;
  }

  create = async (user:IUser):Promise<void> => {
    const { username, classe, level, password } = user;
    const query = `INSERT INTO Trybesmith.Users(username,classe,level,password)
     VALUES(?,?,?,?);`;

    await this.connection.execute<ResultSetHeader>(
      query, 
      [
        username,
        classe,
        level,
        password,
      ],
    );
  };
}