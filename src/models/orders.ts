import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces/interfaces';
import connection from './connection';

export default class OrderModel {
  private connection:Pool;

  constructor() {
    this.connection = connection;
  }

  list = async ():Promise<IOrder[]> => {
    const query = `
    SELECT O.id, O.userId, JSON_ARRAYAGG(p.id) AS products
    FROM Trybesmith.Orders AS O
    INNER JOIN Trybesmith.Products AS p ON O.id = p.orderId
    GROUP BY O.id 
    ORDER BY O.userId;`;
    const [result] = await this.connection.execute<RowDataPacket[]>(query);

    return result as IOrder[];
  };
}