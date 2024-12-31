import './App.css'
import { FilesTable } from './components/FilesTable';

function App() {
  return (
    <>
      <header className="bg-primary">
        <h2 >
          React test App
        </h2>
      </header>
      <main>
        <FilesTable />
      </main>
    </>
  )
}

export default App
