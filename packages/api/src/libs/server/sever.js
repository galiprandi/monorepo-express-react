import express from 'express'
import cors from '../../middleware/cors.middleware.js'
import { routes } from '../../routes/routes.js'

const app = express()

// Apply middleware
app.use(express.json())
app.use(cors)

// Routes
app.use('/', routes)

export default app
