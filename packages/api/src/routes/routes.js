import express from 'express'
import { healthRoute } from './health/root.get.route.js'
import { filesDataRoute } from './files/data.get.route.js'
import { filesListRoute } from './files/list.get.route.js'

export const routes = express.Router()

// Health routes
routes.use('/health', healthRoute)

// Files routes
routes.use('/files', filesDataRoute)
routes.use('/files', filesListRoute)
