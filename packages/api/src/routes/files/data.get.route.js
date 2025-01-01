import express from 'express'
import { getFilesDataController } from '../../externals/controllers/files/data.controller.js'

export const filesDataRoute = express.Router()
filesDataRoute.get('/data', getFilesDataController)
