import React, {useState} from 'react';
import data from '@site/static/data/knowledge-hub-data.json';

export default function KnowledgeHubTable() {
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(0);
    const rowsPerPage = 3;

    // Search across all values in each row
    // const filtered = data.filter((row) =>
    //     Object.values(row).some((value) =>
    //         value?.toString().toLowerCase().includes(query.toLowerCase())
    //     )
    // );
    const filtered = data.filter(
        row =>
          row.group.toLowerCase().includes(query.toLowerCase()) ||
          row.category.toLowerCase().includes(query.toLowerCase())
    );

    const totalPages = Math.ceil(filtered.length / rowsPerPage);
    const paginated = filtered.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

    return (
        <div>
            <input
                type="text"
                placeholder="Search categories..."
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    setPage(0);
                }}
                style={{
                    marginBottom: '1rem',
                    padding: '0.5rem',
                    width: '100%',
                    maxWidth: '400px',
                    border: '1px solid #ccc',
                    borderRadius: '6px',
                }}
            />
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
                <thead>
                <tr>
                    <th style={cellHeader}>Resource Group Category</th>
                    <th style={cellHeader}>Open Source Resources</th>
                    <th style={cellHeader}>GitHub Link</th>
                    <th style={cellHeader}>Description</th>
                    <th style={cellHeader}>Category</th>
                    <th style={cellHeader}>Offering/Utility Value</th>
                </tr>
                </thead>
                <tbody>
                {paginated.map((row, index) => (
                    <tr key={index}>
                        <td style={cell}>{row.group}</td>
                        <td style={cell}>
                            {row.link ? (
                                <a href={row.link} target="_blank" rel="noopener noreferrer">
                                    {row.name}
                                </a>
                            ) : (
                                row.name
                            )}
                        </td>
                        <td style={cell}>
                            {row.github_link && row.github_link.toLowerCase() !== 'n/a' ? (
                                <a href={row.github_link} target="_blank" rel="noopener noreferrer">
                                    {row.github_link.replace(/https?:\/\/|www\.|github\.com\/|\/$/gi, '') || 'GitHub'}
                                </a>
                            ) : (
                                '-'
                            )}
                        </td>
                        <td style={cell}>{row.description}</td>
                        <td style={cell}>{row.category}</td>
                        <td style={cell}>{row.value}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div
                style={{
                    marginTop: '1rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem',
                }}
            >
                <button onClick={() => setPage(page - 1)} disabled={page === 0}>
                    Previous
                </button>
                <span>
          Page {page + 1} of {totalPages}
        </span>
                <button onClick={() => setPage(page + 1)} disabled={page + 1 === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
}

const cellHeader = {
    borderBottom: '2px solid #2d6ca2',
    backgroundColor: '#2d6ca2',
    color: '#ffffff',
    textAlign: 'left',
    padding: '8px',
};

const cell = {
    padding: '8px',
    verticalAlign: 'top',
    borderBottom: '1px solid #ccc',
};
