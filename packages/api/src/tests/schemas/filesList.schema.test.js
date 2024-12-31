import { expect } from 'chai'
import { filesListSchema } from '../../externals/schemas/filesList.schema.js'

describe('filesList Schema', () => {
  it('should validate a correct files list', () => {
    const data = { files: ['file1.csv', 'file2.csv'] }
    expect(() => filesListSchema.parse(data)).to.not.throw()
  })

  it('should throw an error for invalid files list', () => {
    const invalidData = { files: 'not-an-array' }
    expect(() => filesListSchema.parse(invalidData)).to.throw()
  })
})
