import React from 'react'
import styles from './Search.module.scss'

const Search = ({setSearch, setPageNumber}) => {
    return (
        <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-4">
            <input 
                onChange={e => {
                    setPageNumber(1)
                    setSearch(e.target.value)
                }}
                placeholder="Search for Character" 
                type="text" 
                className={styles.input}/>
            <button 
                onClick={e => { 
                    e.preventDefault();
                }}
                className={`${styles.btn} btn fs-5`}>Search</button>
        </form>
    )
}

export default Search
