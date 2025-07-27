import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('welcome to authenticationnnn service');
});
export default app;
