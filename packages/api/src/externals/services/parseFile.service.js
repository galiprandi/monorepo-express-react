import { lineSchema } from '../schemas/parseFile.schema.js';
import logger from '../../libs/logger/logger.js';

export const parseFile = (rawFileContent) => {
    const rows = rawFileContent.split('\n');
    const parsedData = [];

    const [header, ...lines] = rows;
    const expectedColumns = ['file', 'text', 'number', 'hex'];

    if (!header || header.trim() !== expectedColumns.join(',')) {
        logger.error('Invalid CSV header format.');
        throw new Error('Invalid CSV header format.');
    }

    for (const line of lines) {
        const columns = line.split(',');

        if (columns.length !== expectedColumns.length) {
            logger.warn('Skipping invalid line:', line);
            continue;
        }

        const lineData = {
            file: columns[0].trim(),
            text: columns[1].trim(),
            number: parseInt(columns[2], 10),
            hex: columns[3].trim()
        };

        try {
            lineSchema.parse(lineData);
            parsedData.push(lineData);
        } catch (error) {
            logger.warn('Invalid line:', lineData, error.errors);
        }
    }

    return parsedData;
};
