import { useFilesData } from '../hooks/useFilesData'
import { Table } from './Table'

export const FilesTable = () => {
  const { data, status, error } = useFilesData()

  const props = {
    columns: ['File Name', 'Text', 'Number', 'Hex'],
    data
  }

  if (status === 'loading') return <p>Loading...</p>
  if (status === 'error') return <p>Error: {error}</p>
  if (!data || data.length === 0) return <p>No data available</p>

  return <Table {...props} />
}
