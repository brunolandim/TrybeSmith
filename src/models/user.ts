import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IUser } from '../interfaces/interfaces';
import connection from './connection';

export default class UserModel {
  private connection:Pool;

  constructor() {
    this.connection = connection;
  }

  list = async ():Promise<IUser[]> => {
    const [result] = await this.connection.execute<RowDataPacket[]>(`
    SELECT * FROM Trybesmith.Users;`);
    
    return result as IUser[];
  };

  findUser = async (username:string):Promise<IUser[]> => {
    const query = 'SELECT * FROM Trybesmith.Users WHERE username = ?';
    const [result] = await this.connection.execute<RowDataPacket[]>(query, [username]);

    return result as IUser[];
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