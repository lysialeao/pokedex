import styled from 'styled-components';

export const Content = styled.div`
    width: auto;
    height: 10rem;
    display: flex;
    align-items:center;
    justify-content:center;
    border-radius: 2rem;
    background-color: #ffffff;
    box-shadow: 0 0 1em #eaecf0;
    text-transform: capitalize;
    flex-direction: column;
    padding: 1rem;
    gap:0.5rem;
    // flex: 1 1 12rem;
    // margin-top: 5rem;

    & p {
        color: #97a2af;
        margin: 0;
        padding: 0;
    }
`

export const Types = styled.div`
    width: 100%;
    display: flex;
    gap: 0.5rem;
    justify-content:center;
    
`

const colorType = name => {
    switch (name) {
        case 'grass':
            return '#a8ef8a';
        case 'ground':
            return '#ffcd83';
        case 'fighting':
            return '#e26965';
        case 'fire':
            return '#fc964f';
        case 'water':
            return '#6495ED';
        case 'poison':
            return '#6A5ACD';
        case 'flying':
            return '#ADD8E6';
        case 'electric':
            return '#DAA520';
        case 'bug':
            return '#FA8072';
        default:
            return '#C0C0C0';
    }
  };

export const Type = styled.div`
    width: auto;
    display: block;
    padding: 0.5rem;
    background-color: ${props => colorType(props.name)};
    border-radius: 0.5rem;
`
export const Name = styled.div`
    font-size:1.5rem;
    font-weight: bold;
`

export const Image = styled.div`
    position:absolute;
    margin-bottom:15%;
    width: 5rem;
    height: 5rem;
    background-image: url(${props => props.source});
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;

`