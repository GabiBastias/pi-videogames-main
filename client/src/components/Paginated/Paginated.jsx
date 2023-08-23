
const Paginated = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevPage = () => {
        if (currentPage > 0) {
            onPageChange(currentPage - 1);
        }
    }
    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            onPageChange(currentPage + 1);
        }
    }

    return(
        <div>
            <button onClick={handlePrevPage}>Prev</button>
            <span>Page {currentPage}</span>
            <button onClick={handleNextPage}>Next</button>
        </div>
    )
}

export default Paginated;