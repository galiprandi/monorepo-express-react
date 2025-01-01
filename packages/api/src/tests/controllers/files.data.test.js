import { expect } from 'chai'
import sinon from 'sinon';
import * as processService from '../../externals/services/processData.service.js';
import { getFilesDataController } from '../../externals/controllers/files/data.controller.js';

describe('Files Controller', () => {
    let req, res;

    beforeEach(() => {
        req = { query: {} };
        res = {
            json: sinon.stub(),
            status: sinon.stub().returnsThis()
        };
        sinon.restore();
    });

    it('should process all files when no fileName is provided', async () => {
        const mockData = [{ file: 'file1.csv', lines: [] }];
        sinon.stub(processService, 'processData').resolves(mockData);

        await getFilesDataController(req, res);

        expect(res.json.calledWith(mockData)).to.be.true;
    });

    it('should process a single file when fileName is provided', async () => {
        req.query.fileName = 'file1.csv';
        const mockData = { file: 'file1.csv', lines: [] };
        sinon.stub(processService, 'processSingleFile').resolves(mockData);

        await getFilesDataController(req, res);

        expect(res.json.calledWith(mockData)).to.be.true;
    });

    it('should return an error if processing fails', async () => {
        sinon.stub(processService, 'processData').throws(new Error('Processing failed'));

        await getFilesDataController(req, res);

        expect(res.status.calledWith(500)).to.be.true;
        expect(res.json.calledWith({ error: 'Processing failed' })).to.be.true;
    });
});
