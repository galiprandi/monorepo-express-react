import express from 'express'
import cors from '../../middleware/cors.middleware.js'
import { healthRoute } from '../../routes/health.get.route.js'
import { filesDataRoute } from '../../routes/files/data.get.route.js'
import { filesListRoute } from '../../routes/files/list.get.route.js'

const app = express()

// Apply middleware
app.use(express.json())
app.use(cors)

// Routes
app.use('/health', healthRoute)
app.use('/files', filesDataRoute)
app.use('/files', filesListRoute)

export default app
