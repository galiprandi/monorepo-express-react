import './App.css'
import { Table } from './components/Table';
import { useFilesData } from './hooks/useFilesData';

const props = {
  columns: ['File Name', 'Text', 'Number', 'Hex'],
  data: [
    ['file1.cvs', 'RgTya', 64075909, 0xDEADBEEF],
    ['file2.cvs', 'RgTya', 64075909, 0xDEADBEEF],
    ['file3.cvs', 'RgTya', 64075909, 0xDEADBEEF],

  ]
}


function App() {
  const { data, status, error } = useFilesData();

  console.log(data, status, error)

  return (
    <>
      <header className="bg-primary">
        <h2 >
          React test App
        </h2>
      </header>
      <main>
        <Table {...props} />
      </main>
    </>
  )
}

export default App
