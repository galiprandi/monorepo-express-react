import { render, screen } from '@testing-library/react'
import { Table } from '../components/Table'

describe('Table Component', () => {
  it('renders a table with the correct columns and data', () => {
    const columns = ['Name', 'Age', 'Country']
    const data = [
      ['John', 25, 'USA'],
      ['Maria', 30, 'Canada']
    ]

    render(<Table columns={columns} data={data} />)

    // Verificar las columnas
    columns.forEach((column) => {
      expect(screen.getByText(column)).toBeInTheDocument()
    })

    // Verificar las filas
    data.forEach((row) => {
      row.forEach((cell) => {
        expect(screen.getByText(cell)).toBeInTheDocument()
      })
    })
  })

  it('returns null if data is empty', () => {
    const { container } = render(<Table columns={['Name', 'Age']} data={[]} />)
    expect(container.firstChild).toBeNull()
  })

  it('returns null if data contains rows with incorrect length', () => {
    const columns = ['Name', 'Age', 'Country']
    const data = [['John', 25]] // Incorrect length
    const { container } = render(<Table columns={columns} data={data} />)
    expect(container.firstChild).toBeNull()
  })

  it('returns null if data is not provided', () => {
    const { container } = render(<Table columns={['Name', 'Age']} />)
    expect(container.firstChild).toBeNull()
  })

  it('applies custom styles from the CSS module', () => {
    const columns = ['Name']
    const data = [['John']]

    const { container } = render(<Table columns={columns} data={data} />)
    const tableElement = container.querySelector('table')

    expect(tableElement).toHaveClass('table')
  })
})
