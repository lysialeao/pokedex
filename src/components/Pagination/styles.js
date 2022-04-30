import styled from 'styled-components';

export const Ul = styled.ul`
    display: flex;
    list-style: none;

    & li+li{
        margin-left: 1rem;
    }
`

export const Button = styled.button`
    background: ${props => props.active === true ? 'none' : 'pink'};
    font-weight: ${props => props.active === true ? 'bold' : 'none'};
    border: none;
    cursor: pointer;
`