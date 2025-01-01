import { getFiles } from '../../services/getFiles.service.js';

/**
 * Controller for /files/list endpoint.
 * @param {Object} req The request object.
 * @param {Object} res The response object.
 */
export const getFilesListController = async (req, res) => {
    try {
        const files = await getFiles();
        res.json({ files });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
