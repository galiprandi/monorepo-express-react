import React from 'react';
import TableComponent from 'react-bootstrap/Table';
import styles from './Table.module.css';


/**
 * Table component that renders a table with the given columns and data.
 * 
 * @param {Object} props - The props for the component.
 * @param {string[]} props.columns - The column headers for the table.
 * @param {(string|number)[][]} props.data - The data to be displayed in the table.
 * @returns {JSX.Element|null} The rendered table or null if the data is invalid.
 */
export const Table = ({ columns, data }) => {
    if (!data || data.length === 0 || data.some(row => row.length !== columns.length)) {
        return null;
    }

    return (
        <TableComponent striped bordered hover className={styles.table}>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </TableComponent>
    );
};

