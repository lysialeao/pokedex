import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color:#f6f8fc;
    font-family: Roboto;
    margin: 0 auto;
    margin: 0;
    
`;

export const Content = styled.div`
    width: 100%;
    max-width: 80%;
    margin: 30px;
    border-radius: 4px;
    padding: 20px;
    display:grid;
    grid-gap: 30px 20px;
`;

export const Header = styled.div`
    width: 100%;
    height: 8rem;
    background-image: url(${props => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 4rem;
`;

export const Form = styled.form`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 10px;
`

export const Input = styled.input`
    display: block;
    width: auto;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background: #eee;
    transition: 0.2s;
    margin-bottom: 0.5rem;
    border:none;
    box-shadow: 0 0 1em #C0C0C0;

    &:focus,
    &:hover {
        outline: none;
        border:none;
        background: #fff;
        box-shadow: 0 0 0 2px #C0C0C0;
    }

`
