import './libs/env/config.js'; // Carga las variables de entorno
import express from 'express';
import logger from './libs/logger/logger.js';
import cors from 'cors';


const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({
    status: 'Server is up and running',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`🚀 Server running on http://localhost:${PORT}/health`);
});
