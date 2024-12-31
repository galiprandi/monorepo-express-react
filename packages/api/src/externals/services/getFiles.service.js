import axios from 'axios';
import { EXTERNAL_API_URL, API_KEY } from '../../libs/env/config.js';
import logger from '../../libs/logger/logger.js';

export const getFiles = async () => {
    try {
        const response = await axios.get(`${EXTERNAL_API_URL}/files`, {
            headers: { Authorization: API_KEY }
        });
        logger.info('Successfully fetched file list.');
        return response.data.files || [];
    } catch (error) {
        logger.error('Error fetching files:', error.message);
        throw new Error('Failed to fetch files from the external API.');
    }
};
