import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { ILogin, IUser } from '../interfaces/interfaces';
import connection from './connection';

export default class UserModel {
  private connection:Pool;

  constructor() {
    this.connection = connection;
  }

  list = async ():Promise<ILogin[]> => {
    const query = 'SELECT * FROM Trybesmith.Users';
    const [result] = await this.connection.execute<RowDataPacket[]>(query);
    
    return result as ILogin[];
  };

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