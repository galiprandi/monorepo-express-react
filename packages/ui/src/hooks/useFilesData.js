import { useState, useEffect } from 'react'
import { API_URL } from '../libs/env/config'

/**
 * Custom hook to fetch table data from the given URL.
 *
 * @returns {Object} An object containing the table data, the status of the fetch request, and any error message.
 */
export const useFilesData = (fileName = null) => {
    console.log('fileName:', fileName)
    const [rawData, setRawData] = useState([])
    const [records, setRecords] = useState([])
    const [status, setStatus] = useState('idle') // 'idle', 'loading', 'success', 'error'
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setStatus('loading')
            setError(null)
            try {
                const baseUrl = new URL(`${API_URL}/files/data`);
                if (fileName) baseUrl.searchParams.append('fileName', fileName);

                const response = await fetch(baseUrl)

                if (!response.ok)
                    throw new Error('Network response was not ok')

                const rawData = await response.json()
                setRawData(rawData)
                const records = rawData.flatMap(({ lines }) =>
                    lines.map((line) => Object.values(line))
                )

                setRecords(records)
                setStatus('success')
            } catch (error) {
                console.error('Fetch error:', error)
                setError(error.message)
                setStatus('error')
            }
        }

        fetchData()
    }, [])

    return { records, rawData, status, error }
}


