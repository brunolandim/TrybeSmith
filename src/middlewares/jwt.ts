import jwt from 'jsonwebtoken';

const SECRET = 'SECRET';

export default (username:string, password:string, id?:number):string => {
  const token = jwt.sign({ id, username, password }, SECRET, { algorithm: 'HS256' });

  return token;
};