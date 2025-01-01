import { processDataService } from '../../services/processData.service.js'
import { processSingleFileService } from '../../services/prossesSingleFile.service.js'

/**
 * Handles the /files/data endpoint.
 * Supports filtering by fileName query parameter.
 * @param {Object} req The request object.
 * @param {Object} res The response object.
 */
export const getFilesDataController = async (req, res) => {
  const { fileName } = req.query

  try {
    if (fileName) {
      // Process a single file if fileName is provided
      const fileData = await processSingleFileService(fileName)
      return res.json([fileData])
    }

    // Process all files if no fileName is provided
    const allData = await processDataService()
    res.json(allData)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
