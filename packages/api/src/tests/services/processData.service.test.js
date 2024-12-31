import { expect } from 'chai'
import esmock from 'esmock'

describe('processData Service', () => {
  let processData

  beforeEach(async () => {
    // Mockear los servicios
    processData = await esmock('../../externals/services/processData.service.js', {
      '../../externals/services/getFiles.service.js': {
        getFiles: async () => ['file1.csv', 'file2.csv']
      },
      '../../externals/services/getFile.service.js': {
        getFile: async (fileName) => {
          if (fileName === 'file1.csv') {
            return 'file,text,number,hex\nfile1.csv,Hello,1234,abcd1234abcd1234abcd1234abcd1234'
          } else if (fileName === 'file2.csv') {
            return 'file,text,number,hex\nfile2.csv,World,5678,abcd5678abcd5678abcd5678abcd5678'
          }
          throw new Error(`File ${fileName} not found`)
        }
      },
      '../../externals/services/parseFile.service.js': {
        parseFile: (rawContent) => {
          if (rawContent.includes('Hello')) {
            return [{ text: 'Hello', number: 1234, hex: 'abcd1234abcd1234abcd1234abcd1234' }]
          } else if (rawContent.includes('World')) {
            return [{ text: 'World', number: 5678, hex: 'abcd5678abcd5678abcd5678abcd5678' }]
          }
          return []
        }
      }
    })
  })

  it('should process all valid files and return parsed data', async () => {
    const result = await processData()
    expect(result).to.deep.equal([
      {
        file: 'file1.csv',
        lines: [{ text: 'Hello', number: 1234, hex: 'abcd1234abcd1234abcd1234abcd1234' }]
      },
      {
        file: 'file2.csv',
        lines: [{ text: 'World', number: 5678, hex: 'abcd5678abcd5678abcd5678abcd5678' }]
      }
    ])
  })

  it('should skip files with errors', async () => {
    const processDataWithError = await esmock('../../externals/services/processData.service.js', {
      '../../externals/services/getFiles.service.js': {
        getFiles: async () => ['file1.csv', 'file2.csv']
      },
      '../../externals/services/getFile.service.js': {
        getFile: async (fileName) => {
          if (fileName === 'file1.csv') {
            throw new Error('File not found')
          }
          return 'file,text,number,hex\nfile2.csv,World,5678,abcd5678abcd5678abcd5678abcd5678'
        }
      },
      '../../externals/services/parseFile.service.js': {
        parseFile: (rawContent) => {
          if (rawContent.includes('World')) {
            return [{ text: 'World', number: 5678, hex: 'abcd5678abcd5678abcd5678abcd5678' }]
          }
          return []
        }
      }
    })

    const result = await processDataWithError()
    expect(result).to.deep.equal([
      {
        file: 'file2.csv',
        lines: [{ text: 'World', number: 5678, hex: 'abcd5678abcd5678abcd5678abcd5678' }]
      }
    ])
  })
})
