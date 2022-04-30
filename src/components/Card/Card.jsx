import React, { useState, useEffect } from 'react';
import { Content } from './styles.js';
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
                <img src={pokeInfo.sprites.front_default} />
                <b> {pokeInfo.name} </b>
                {
                    pokeInfo.types.map((type) => {
                        return <p>{type.type.name}</p>
                    })
                }
            </Content>
        )
    }else{
        return null
    }
    
}

export default Card;