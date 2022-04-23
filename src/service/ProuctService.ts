import { Product } from '../interfaces/interfaces';
import ProductModel from '../models/products';

export default class ProductService {
  public Model:ProductModel;

  constructor() {
    this.Model = new ProductModel();
  }

  list = async ():Promise<Product[]> => {
    const result = await this.Model.list();

    return result as Product[];
  };
}