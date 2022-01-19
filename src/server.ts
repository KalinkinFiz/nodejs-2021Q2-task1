import config from './common/config';
import app from './app';

import { unhandledRejection, uncaughtException } from './middlewares';

const { PORT } = config;

app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`));

process.on('uncaughtException', uncaughtException);
// throw Error('Oops!');
process.on('unhandledRejection', unhandledRejection);
// Promise.reject(Error('Oops!'));
