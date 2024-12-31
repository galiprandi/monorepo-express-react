import './libs/env/config.js'; // Carga las variables de entorno
import express from 'express';
import logger from './libs/logger/logger.js';
import cors from 'cors';
import processData from './externals/services/processData.service.js';


const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({
    status: 'Server is up and running',
    timestamp: new Date().toISOString()
  });
});

app.use('/files/data', async (req, res) => {
  const data = await processData();
  res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`🚀 Server running on http://localhost:${PORT}/health`);
});
