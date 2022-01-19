import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const { NODE_ENV, MONGO_CONNECTION_STRING, JWT_SECRET_KEY, PORT, AUTH_MODE } = process.env;

const config = {
  NODE_ENV,
  PORT: PORT ?? 4000,
  MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY,
  AUTH_MODE: AUTH_MODE === 'true',
};

export default config;
