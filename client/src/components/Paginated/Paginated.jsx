import styles from './paginated.module.css'

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

    const arrayTotalPage = [];
    for (let i = 0; i < totalPages; i++) {
        arrayTotalPage.push(i);
    }

    const handleClick = (event) => {
        onPageChange(event.target.value)
    }

    return(
        <div className={styles.divPaginated}>
            <div>
                <h3>Page {currentPage + 1}</h3>
            </div>
            <div className={styles.divButtons}>
                {currentPage > 0 ? <button onClick={handlePrevPage}>Prev</button> : null}
                {arrayTotalPage ? arrayTotalPage.map((num, index) => {
                    return <button 
                                key={index}
                                onClick={handleClick}
                                value={num}
                                >{num + 1}</button>
                }) : null}     
                {currentPage !== totalPages - 1 ? <button onClick={handleNextPage}>Next</button> : null}
            </div>
        </div>
    )
}

export default Paginated;