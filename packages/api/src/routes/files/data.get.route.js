import { processData } from '../../externals/services/processData.service.js'

export const getFileData = async (req, res) => {
  try {
    const data = await processData()
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
