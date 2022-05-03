import React from 'react';
import { ModalBackground, ModalContainer, Button, Image, Body } from './styles.js';
import { Name, Types, Type } from '../Card/styles';

const Modal = ({closeModal, pokeInfo}) => {

    console.log(pokeInfo)
    return(
        <ModalBackground>
            <ModalContainer>
                <Button onClick={() => closeModal(false)}>X</Button>
                <Body>
                    <Image source={pokeInfo.sprites.front_default} />
                    <p>Nº{pokeInfo.id}</p>
                    <Name>{pokeInfo.name}</Name>
                    <Types> 
                    {
                        pokeInfo.types.map((type) => {
                            return <Type name={type.type.name}>{type.type.name}</Type>
                        })
                    }
                </Types>
                </Body>
            </ModalContainer>
        </ModalBackground>
    )
}

export default Modal;