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

app.use('/files/data', (req, res) => {
  res.json([
    ['file1.csv', 'RgTya', 64075909, '70ad29aacf0b690b0467fe2b2767f765'],
    ['file1.csv', 'RgTya', 64075909, '70ad29aacf0b690b0467fe2b2767f765'],
    ['file1.csv', 'RgTya', 64075909, '70ad29aacf0b690b0467fe2b2767f765'],
    ['file1.csv', 'RgTya', 64075909, '70ad29aacf0b690b0467fe2b2767f765'],
    ['file1.csv', 'RgTya', 64075909, '70ad29aacf0b690b0467fe2b2767f765'],
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`🚀 Server running on http://localhost:${PORT}/health`);
});
