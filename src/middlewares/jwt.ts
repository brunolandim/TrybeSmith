import jwt from 'jsonwebtoken';

const SECRET = 'SECRET';

export default (username:string, password:string):string => {
  const token = jwt.sign({ username, password }, SECRET, { algorithm: 'HS256' });

  return token;
};