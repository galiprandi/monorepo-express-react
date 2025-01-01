import { render, screen } from '@testing-library/react';
import App from '../App';

vi.mock('../hooks/useFilesData', () => ({
    useFilesData: () => ({
        data: [
            { file: 'file1.csv', lines: [] },
            { file: 'file2.csv', lines: [] }
        ],
        fileList: ['file1.csv', 'file2.csv'],
        isLoading: false,
        error: null
    })
}));

test('renders the app title', () => {
    render(<App />);
    const titleElement = screen.getByText(/React test App/i);
    expect(titleElement).toBeInTheDocument();
});
