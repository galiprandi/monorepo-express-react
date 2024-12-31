import './libs/env/config.js'; // Carga las variables de entorno
import express from 'express';
import logger from './libs/logger/logger.js';

const app = express();

app.get('/', (req, res) => {
  res.send('API is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});
