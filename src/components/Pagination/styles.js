import styled from 'styled-components';

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    justify-content:center;

    & li+li{
        margin-left: 1rem;
    }
`

export const Button = styled.button`
    background: ${props => props.active === true ? 'none' : '#ffffff'};
    font-weight: ${props => props.active === true ? 'bold' : 'none'};
    border: none;
    box-shadow: 0 0 1em #eaecf0;
    // cursor: pointer;
`