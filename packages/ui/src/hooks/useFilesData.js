import { useState, useEffect } from 'react'

/**
 * Custom hook to fetch table data from the given URL.
 *
 * @returns {Object} An object containing the table data, the status of the fetch request, and any error message.
 */
export const useFilesData = () => {
  const [data, setData] = useState([])
  const [status, setStatus] = useState('idle') // 'idle', 'loading', 'success', 'error'
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setStatus('loading')
      setError(null)
      try {
        const response = await fetch('http://localhost:3000/files/data')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const result = await response.json()
        setData(result)
        setStatus('success')
      } catch (error) {
        console.error('Fetch error:', error)
        setError(error.message)
        setStatus('error')
      }
    }

    fetchData()
  }, [])

  return { data, status, error }
}
