import express from 'express';
import { getFilesListController } from '../../externals/controllers/files/list.controller.js';


export const filesListRoute = express.Router();
filesListRoute.get('/list', getFilesListController);
