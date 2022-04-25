import { Pool, RowDataPacket } from 'mysql2/promise';
import { ILogin } from '../interfaces/interfaces';
import connection from './connection';

export default class LoginModel {
  private connection:Pool;

  constructor() {
    this.connection = connection;
  }

  list = async ():Promise<ILogin[]> => {
    const query = 'SELECT * FROM Trybesmith.Users';
    const [result] = await this.connection.execute<RowDataPacket[]>(query);
    
    return result as ILogin[];
  };
}