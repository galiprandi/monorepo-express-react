import { useFilesData } from '../hooks/useFilesData'
import { Table } from './Table'
import Form from 'react-bootstrap/Form'
import styles from './FilesTable.module.css'

export const FilesTable = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const fileName = urlParams.get('fileName') || ''
  const { records, fileList, status } = useFilesData(fileName)

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

  const noDataAvailable = status !== 'loading' && (!records?.length || status === 'error')

  return (
    <>
      <section className={styles.search}>

        <Form onSubmit={handleSubmit}>
          <input type='text' name='fileName' id='fileName' placeholder='Search by file name' defaultValue={fileName} list='fileList' />
          {
            fileList.length > 1 &&
              <datalist id='fileList'>
                {fileList.map((fileName, index) => (
                  <option key={index} value={fileName} />
                ))}
              </datalist>
}
          <button type='submit'>Search</button>
          {/* reset form button */}
          <button type='button' onClick={() => { window.location.search = '' }}>Show All Files</button>
        </Form>
      </section>

      <section className={styles.table}>

        {status === 'loading' && <p>Loading...</p>}
        {noDataAvailable && <p>No data available</p>}
        <Table {...props} />
      </section>
    </>
  )
}
