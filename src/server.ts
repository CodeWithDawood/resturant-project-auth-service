import { Config } from './config';
import app from './app';
import logger from './config/logger';
const PORT = Config.PORT;

const startServer = () => {
  try {
    app.listen(PORT, () => {
      logger.error('testing error');
      logger.info(`Server is running on port: ${PORT}`, { port: PORT });
    });
  } catch (error) {
    console.error('Error starting the server:', error);
    process.exit(1); // Exit the process with failure
  }
};
startServer();
console.log(`Server is running on port: ${Config.PORT}`);
