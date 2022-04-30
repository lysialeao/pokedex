import React, { useState, useEffect } from 'react';
import { Content, Image, Types, Type, Name } from './styles.js';
import pokeapi from '../../services/pokeapi.js';

const Card = ({pokemon}) => {
    
    const [ pokeInfo, setPokeInfo ] = useState();

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
                <Image source={pokeInfo.sprites.front_default} />
                <p>Nº{pokeInfo.id}</p>
                <Name> {pokeInfo.name} </Name>
                <Types> 
                    {
                        pokeInfo.types.map((type) => {
                            return <Type name={type.type.name}>{type.type.name}</Type>
                        })
                    }
                </Types>
            </Content>
        )
    }else{
        return null
    }
    
}

export default Card;