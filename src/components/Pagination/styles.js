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
    background: ${props => props.active === true ? '#B22222' : '#ffffff'};
    font-weight: ${props => props.active === true ? 'bold' : 'none'};
    border: none;
    width: auto;
    height: auto;
    padding: 0.5rem;
    border-radius: 1rem;
    box-shadow: 0 0 1em #eaecf0;
    // cursor: pointer;
`