import styled from "styled-components";

export const Table = styled.table`
    border-collapse: collapse;
    font-size: 14px;

    thead td {
        background-color: lightgrey;
        text-transform: uppercase;
        padding-left: 10px;
        
    }

    tbody td {
        border-bottom: 1px solid lightgrey;
        padding: 10px 0 20px 10px;
        text-align: left;
    }

    .last-td {
        padding-left: 2rem;
    }
    
`