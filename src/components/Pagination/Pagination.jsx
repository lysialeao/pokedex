import React from 'react';
import { Ul, Button } from './styles';

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;


const Pagination = ({limit, total, offset, setOffset}) => {

    const currentPage = offset ? (offset / limit) + 1 : 1;
    const totalPages = Math.ceil(total / limit);
    const firstPage = Math.max(currentPage - MAX_LEFT, 1);

    function onPageChange(page){
        setOffset((page-1) * limit)
    }

    return(
        <Ul>
            <li>
                <Button onClick={() => onPageChange(currentPage-1)} disabled={currentPage === 1}>Anterior</Button>
            </li>
            { Array.from({ length: Math.min(MAX_ITEMS, totalPages)})
                .map((_, index) => index + firstPage)
                .map((page) => (
                    <li key={page}>
                        <Button active={page===currentPage? true : false} onClick={() => onPageChange(page)}>
                            {page}
                        </Button>
                    </li>
                ))    
            }
            <li>
                <Button onClick={() => onPageChange(currentPage+1)} disabled={currentPage === totalPages}>Próxima</Button>
            </li>
        </Ul>
    )
}

export default Pagination;