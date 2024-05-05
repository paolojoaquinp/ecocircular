import styled from "styled-components";
import Link from 'next/link';

export const BfMain = styled.main`
    width: 100%;
    height: auto;
    padding: 0 20%;
    > .Title {
        color: white;
        font-size: 4rem;
        font-weight: bold;
        margin: 35px 0;
    }
    .actions__container {
        width: 50%;
        margin: 0 auto;
        display:flex;
        flex-direction: column;
        gap: 10px;
    }
`;

export const ForgotPasswordContainer = styled.div`
    color: white;
    font-size: 2.4rem;
    margin-bottom: 24px;
`;

export const LinkCustom = styled(Link)`
    text-decoration: none;
    color:black;
    
    &:hover,
    &:focus{
        color: blue;
    }
    
    &:active{
        color: red;
    }
`;
export const LinkCustomLight = styled(Link)`
    
    color:white;
    
    &:hover,
    &:focus{
        color: greenyellow;
    }
    
    &:active{
        color: red;
    }
`;

export const MyDataPageWrapper = styled.div`
    padding: 3% 10%;
    background-color: #333;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .Title {
        font-size: 2.5rem;
        font-weight: bold;
    }
`;

export const TableWrapper = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    margin: 20px 0;
    th, td {
        border: 1px solid white;
        padding: 10px;
        text-align: center;
    }
    th {
        background-color: black;
        color: white;
    }
    tr:nth-child(*) {
        background-color: #f2f2f2;
    }
    tr:hover {
        background-color: #f3f3f3;
    }
`;