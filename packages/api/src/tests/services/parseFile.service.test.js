import { expect } from 'chai';
import { parseFile } from '../../externals/services/parseFile.service.js';

describe('parseFile Service', () => {
    const validCSV = 'file,text,number,hex\nfile1.csv,Hello,1234,abcd1234abcd1234abcd1234abcd1234';

    it('should parse valid CSV content', () => {
        const result = parseFile(validCSV);
        expect(result).to.deep.equal([
            {
                file: 'file1.csv',
                text: 'Hello',
                number: 1234,
                hex: 'abcd1234abcd1234abcd1234abcd1234'
            }
        ]);
    });

    it('should throw an error for invalid headers', () => {
        const invalidCSV = 'invalid,header';

        expect(() => parseFile(invalidCSV)).to.throw('Invalid CSV header format.');
    });

    it('should skip invalid lines', () => {
        const invalidLinesCSV = 'file,text,number,hex\nfile1.csv,Hello,1234,abcd1234abcd1234abcd1234abcd1234\ninvalid,line';
        const result = parseFile(invalidLinesCSV);

        expect(result).to.deep.equal([
            {
                file: 'file1.csv',
                text: 'Hello',
                number: 1234,
                hex: 'abcd1234abcd1234abcd1234abcd1234'
            }
        ]);
    });
});
