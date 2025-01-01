import logger from "../../libs/logger/logger.js";
import { getFiles } from "./getFiles.service.js";
import { parseFile } from "./parseFile.service.js";

/**
 * Processes a single file and returns its parsed data.
 * @param {string} fileName The name of the file to process.
 * @returns {Object} The parsed data for the specific file.
 */
export const processSingleFileService = async (fileName) => {
    try {
        // Step 1: Fetch the content of the file
        const rawContent = await getFiles(fileName);
        if (!rawContent) {
            logger.warn(`File ${fileName} is empty. Skipping.`);
            return { file: fileName, lines: [] };
        }

        // Step 2: Parse the content of the file
        const parsedData = parseFile(rawContent);

        logger.info(`Successfully processed file: ${fileName}`);
        return {
            file: fileName,
            lines: parsedData
        };
    } catch (error) {
        logger.error(error, `Error processing file ${fileName}:`);
        throw new Error(`Failed to process file ${fileName}`);
    }
};
