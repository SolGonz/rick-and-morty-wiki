import React from 'react'

const FilterBTN = ({name, index, items, task, setPageNumber}) => {
    return (
    <>
    <style jsx>
        {`
        form-check-input:checked + label{
            background-color: #0b5ed7;
            color: white;
        }

        input[type="radio"]{
            display:none
        }
        .accordion-button:not(.collapsed){
            color: #0dcaf0 
        }
        `}
    </style>
        <div className="form-check">
            <input 
            onClick={() => {
                setPageNumber(1);
                task(items)
            }}
                className="form-check-input" 
                type="radio" 
                name={name} 
                id={`${name}-${index}`}
            />
            <label class="btn btn-outline border-info" for={`${name}-${index}`}>
                {items}
            </label>
        </div>
    </>

    )
}

export default FilterBTN
