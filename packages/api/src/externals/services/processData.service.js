import { getFiles } from './getFiles.service.js'
import { getFile } from './getFile.service.js'
import { parseFile } from './parseFile.service.js'
import logger from '../../libs/logger/logger.js'

/**
 * Processes all available files and returns the parsed data.
 * @returns {Array<Object>} An array of parsed data objects from all valid files.
 */
export const processDataService = async () => {
  const allData = []

  try {
    // Step 1: Fetch the list of files
    const files = await getFiles()
    logger.info(`Found ${files.length} files to process.`)

    for (const fileName of files) {
      try {
        // Step 2: Fetch the content of each file
        const rawContent = await getFile(fileName)
        if (!rawContent) {
          logger.warn(`File ${fileName} is empty. Skipping.`)
          continue
        }

        // Step 3: Parse the content of the file
        const parsedData = parseFile(rawContent)
        allData.push({
          file: fileName,
          lines: parsedData
        })

        logger.info(`Successfully processed file: ${fileName}`)
      } catch (error) {
        logger.error(error, `Error processing file ${fileName}:`)
        // Continue with the next file without interrupting the loop
      }
    }
  } catch (error) {
    logger.error(error, 'Failed to fetch the list of files:')
    throw new Error('Error processing data.')
  }

  return allData
}
