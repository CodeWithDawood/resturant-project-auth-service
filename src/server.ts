import { Config } from './config';
import app from './app';
const PORT = Config.PORT;

const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is runninggg on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
    process.exit(1); // Exit the process with failure
  }
};
startServer();
console.log(`Server is running on port: ${Config.PORT}`);
