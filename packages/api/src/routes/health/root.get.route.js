import express from 'express'

export const healthRoute = express.Router()

healthRoute.get('/', (_req, res) => {
  const healthCheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now()
  }

  try {
    res.status(200).json(healthCheck)
  } catch (error) {
    healthCheck.message = error
    res.status(503).json(healthCheck)
  }
})
