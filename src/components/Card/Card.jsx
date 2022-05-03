import React, { useState, useEffect } from 'react';
import { Content, Image, Types, Type, Name } from './styles.js';
import pokeapi from '../../services/pokeapi.js';
import Modal from '../Modal/Modal.jsx';

const Card = ({pokemon}) => {
    
    const [ pokeInfo, setPokeInfo ] = useState();
    const [ openModal, setOpenModal ] = useState(false);

    useEffect(() => {
        pokeapi.get(`pokemon/${pokemon.name}`)
            .then((response) => setPokeInfo(response.data))
            .catch((err) => {
              console.error("ops! ocorreu um erro" + err);
    });
    }, [pokemon])

    if(pokeInfo){
        return(
            <Content>
                <Image source={pokeInfo.sprites.front_default} onClick={() => setOpenModal(true)}/>
                <p>Nº{pokeInfo.id}</p>
                <Name> {pokeInfo.name} </Name>
                <Types> 
                    {
                        pokeInfo.types.map((type) => {
                            return <Type key={type.type.name} name={type.type.name}>{type.type.name}</Type>
                        })
                    }
                </Types>
                { openModal && <Modal closeModal={setOpenModal} pokeInfo={pokeInfo} /> }
            </Content>
        )
    }else{
        return null
    }
    
}

export default Card;