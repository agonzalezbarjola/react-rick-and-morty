import { useState } from "react";
import "./Pagination.scss";

export default function Pagination({getData}) {
    const [actualPage, setActualPage] = useState(1);

    const changePage = (newPage) => {
        getData(newPage);
        setActualPage(newPage);
    }

    return <div className="c-pagination">
        <button className="c-pagination__button" onClick={() => changePage(actualPage - 1)}>{"<"}</button>
        <span className="c-pagination__number">{actualPage}</span>
        <button className="c-pagination__button" onClick={() => changePage(actualPage + 1)}>{">"}</button>
    </div>
}
