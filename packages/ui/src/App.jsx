import './App.css'
import { Table } from './components/Table';

const props = {
  columns: ['File Name', 'Text', 'Number', 'Hex'],
  data: [
    ['file1.cvs', 'RgTya', 64075909, 0xDEADBEEF],
    ['file2.cvs', 'RgTya', 64075909, 0xDEADBEEF],
    ['file3.cvs', 'RgTya', 64075909, 0xDEADBEEF],

  ]
}


function App() {

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
