import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import styles from '../Search/Search.module.scss'

const Pagination = ({info, pageNumber, setPageNumber}) => {

    const [width, setWidth] = useState(window.innerWidth);

    const updateDimension = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateDimension);
        return () =>  window.removeEventListener('resize', updateDimension);
    }, []);

    return (
        <>
            <style jsx>
                {`
                    @media (max-width: 768px) {
                        .next, 
                        .prev{
                            display: none;
                        }
                        .pagination {
                            font-size: 14px;
                        }
                    }
                `}
            </style>
            <ReactPaginate 
                className= "pagination justify-content-center gap-4 my-4"
                forcePage={pageNumber === 1 ? 0 : pageNumber -1 }
                nextLabel="Next"
                previousLabel="Prev"
                nextClassName={`${styles.btn} btn fs-5`}
                previousClassName={`${styles.btn} btn fs-5`}
                pageClassName="page-item text-light"
                pageLinkClassName={`${styles.btn} text-light btn fs-6`}
                previousLinkClassName="text-light text-decoration-none"
                nextLinkClassName="text-light text-decoration-none"
                activeClassName="active text-success"
                marginPagesDisplayed={width < 576 ? 1 : 2}
                pageRangeDisplayed={width < 576 ? 1 : 2}
                onPageChange={(data) => {
                    setPageNumber(data.selected +1)
                    console.log(data.selected +1)
                    }}
                pageCount={info?.pages}

            />
        </>
    )
}

export default Pagination
