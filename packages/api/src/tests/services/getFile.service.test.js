import { expect, describe, it } from 'chai'
import nock from 'nock'
import { getFile } from '../../externals/services/getFile.service.js'

const API_URL = 'https://echo-serv.tbxnet.com/v1/secret/file'

describe('getFile Service', () => {
  it('should return file content', async () => {
    const fileName = 'file1.csv'
    const fileContent = 'file,text,number,hex\nfile1.csv,Hello,1234,abcd1234abcd1234abcd1234abcd1234'

    nock(API_URL)
      .get(`/${fileName}`)
      .reply(200, fileContent)

    const content = await getFile(fileName)
    expect(content).to.equal(fileContent)
  })

  it('should throw an error if API fails', async () => {
    const fileName = 'file1.csv'

    nock(API_URL).get(`/${fileName}`).reply(404)

    try {
      await getFile(fileName)
      throw new Error('Test failed: No error thrown')
    } catch (error) {
      expect(error.message).to.include(`Failed to fetch file ${fileName}`)
    }
  })
})
