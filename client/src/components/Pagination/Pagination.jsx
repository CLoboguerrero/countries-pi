import { useState } from 'react';

function Pagination ({ items, itemsPerPage, onPageChange }) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        onPageChange(newPage);
    }

    return (
        <div className='pagination'>
            <button
                onClick={() => handlePageChange(1)}
                disabled = {currentPage === 1}>First</button>

            <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled = {currentPage === 1}>Prev.</button>

            <span>{`Page ${currentPage} of ${totalPages}`}</span>

            <button onClick={() => handlePageChange(currentPage + 1)}
                disabled = {currentPage === totalPages}>Next</button>

            <button
                onClick={() => handlePageChange(totalPages)}
                disabled = {currentPage === totalPages}>Last</button>
        </div>
    );
}

export default Pagination;