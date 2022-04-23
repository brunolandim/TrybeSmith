import { RowDataPacket, Pool, ResultSetHeader } from 'mysql2/promise';
import { Product } from '../interfaces/interfaces';
import connection from './connection';

export default class ProductModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  list = async ():Promise<Product[]> => {
    const query = 'SELECT * FROM Trybesmith.Products;';
    const [result] = await this.connection.execute<RowDataPacket[]>(query);

    return result as Product[];
  };

  create = async (product:Product):Promise<Product> => {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);';
    const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  
    return { id: result.insertId, ...product };
  };
}