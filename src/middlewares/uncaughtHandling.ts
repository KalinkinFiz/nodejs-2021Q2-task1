import fs from 'fs';
import path from 'path';

export const uncaughtException = async (error: Error) => {
  const { name, message } = error;
  const logsFolder = path.join(__dirname, '../../logs');

  if (!fs.existsSync(logsFolder)) {
    fs.mkdirSync(logsFolder);
  }

  fs.appendFileSync(
    path.join(__dirname, '../../logs/uncaughtExceptions.txt'),
    `
    time:            ${new Date()}
    errorName:       ${name}
    errorMessage:    ${message}\n`,
  );
  process.stderr.write(`uncaughtException: ${error.message} \n ${error.stack}`);
  process.exit(1);
};

export const unhandledRejection = async (error: Error, promise: Promise<any>) => {
  const { message } = error;
  const logsFolder = path.join(__dirname, '../../logs');

  if (!fs.existsSync(logsFolder)) {
    fs.mkdirSync(logsFolder);
  }

  fs.appendFileSync(
    path.join(__dirname, '../../logs/unhandledRejection.txt'),
    `
    time:                   ${new Date()}
    unhandledRejection:     ${JSON.stringify(promise)}
    errorMessage:           ${message}\n`,
  );
  process.stderr.write(`unhandledRejection: ${error.message} \n ${error.stack}`);
  process.exit(1);
};
