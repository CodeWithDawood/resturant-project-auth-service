import winston from 'winston';
import { Config } from '.';

const logger = winston.createLogger({
  level: 'info',
  defaultMeta: { service: 'auth-service' },

  transports: [
    new winston.transports.File({
      level: 'debug',
      dirname: 'logs',
      filename: 'app.log',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      silent: false,
    }),
    new winston.transports.File({
      level: 'error',
      dirname: 'logs',
      filename: 'error.log',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      silent: false,
    }),
    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.json(),
      ),
      silent: Config.NODE_ENV === 'test ',
    }),
  ],
});
export default logger;
