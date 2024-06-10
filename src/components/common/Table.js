import React from 'react';

const Table = ({ columns, data }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {columns.map((col) => (
            <th key={col.key} scope="col" className="px-6 py-3">
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} className="border-b dark:border-gray-700">
            {columns.map((column) => (
                <td key={column.key} className="px-6 py-4">
                    {column.render ? column.render(row[column.dataIndex]) : row[column.dataIndex]}
                </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
