import { expect } from 'chai';
import nock from 'nock';
import { getFiles } from '../../externals/services/getFiles.service.js';
import { EXTERNAL_API_URL } from '../../libs/env/config.js';

describe('getFiles Service', () => {
    afterEach(() => {
        // Limpiar intercepciones después de cada prueba
        nock.cleanAll();
    });

    it('should return a list of files', async () => {
        // Configurar la simulación de la respuesta
        nock(EXTERNAL_API_URL)
            .get('/files')
            .reply(200, { files: ['file1.csv', 'file2.csv'] });

        const files = await getFiles();
        expect(files).to.deep.equal(['file1.csv', 'file2.csv']);
    });

    it('should throw an error if API fails', async () => {
        nock(EXTERNAL_API_URL)
            .get('/files')
            .reply(500);

        try {
            await getFiles();
            throw new Error('Test failed: No error thrown');
        } catch (error) {
            expect(error.message).to.equal('Failed to fetch files from the external API.');
        }
    });
});
