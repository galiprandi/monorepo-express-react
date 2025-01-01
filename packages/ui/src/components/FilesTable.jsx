import { useFilesData } from '../hooks/useFilesData'
import { Table } from './Table'
import Form from 'react-bootstrap/Form'

export const FilesTable = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const fileName = urlParams.get('fileName') || ''
  const { records, status } = useFilesData(fileName)

  const props = {
    columns: ['File Name', 'Text', 'Number', 'Hex'],
    data: records
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const fileName = formData.get('fileName')
    const searchParams = new URLSearchParams({ fileName })
    window.location.search = searchParams.toString()
  }
  const noDataAvailable = !records?.length || status === 'error'

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input type='text' name='fileName' id='fileName' placeholder='Search by file name' defaultValue={fileName} />
        <button type='submit'>Search</button>
        {/* reset form button */}
        <button type='button' onClick={() => { window.location.search = '' }}>Show All Files</button>
      </Form>

      <br />
      {status === 'loading' && <p>Loading...</p>}
      {noDataAvailable && <p>No data available</p>}
      <Table {...props} />
    </>
  )
}
