import s from '../Users/Users.module.css';
import React from "react";



const { useState } = require("react");

const Paginator = ({count, page, currentPage, onPageChanget, portSize = 10}) =>{

    let pagesCount = Math.ceil(count / page);

    let pages = [];
    
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    let [portionNumber, setPortionNumber] = useState(1)

    let portionCount = Math.ceil(pagesCount / portSize);
    let leftNumber = (portionNumber-1)*portSize+1;
    let rigthNumber = leftNumber + portSize-1;
debugger

    return  <div>
        {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber-1)}>PREV</button>}
        {pages.filter(p => p>=leftNumber && p<=rigthNumber).map(p => {
                return <span className={s.number__page}>
                    <span className={currentPage === p && s.bold} onClick={() => onPageChanget(p)}>
                   {p}</span></span>
                
        })}
        {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber+1)}>NEXT</button>}
    </div>
} 

export default Paginator;