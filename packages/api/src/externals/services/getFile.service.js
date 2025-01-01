import axios from 'axios'
import { EXTERNAL_API_URL, API_KEY } from '../../libs/env/config.js'
import logger from '../../libs/logger/logger.js'

export const getFile = async (fileName) => {
  try {
    const response = await axios.get(`${EXTERNAL_API_URL}/file/${fileName}`, {
      headers: { Authorization: API_KEY }
    })
    logger.info(`Successfully fetched file: ${fileName}`)
    return response.data
  } catch (error) {
    logger.error(`Error fetching file ${fileName}:`)
    throw new Error(`Failed to fetch file ${fileName} from the external API.`)
  }
}
