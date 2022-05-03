import styled from 'styled-components';

export const ModalBackground = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(50, 50, 50, 0.4);
    position: fixed;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center; 
    z-index:10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

export const ModalContainer = styled.div`
    width: 18rem;
    height: 25rem;
    border-radius: 12px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: 25px;
`

export const Button = styled.button`
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
`

export const Body = styled.div`
    flex: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap:0.5rem;


`
export const Image = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.source});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: none;
`
