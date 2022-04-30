import React from 'react';

import { Container } from './styles.js';
import Card from '../Card/Card';

const Gallery = ({pokelist}) => {

   return(
      <Container> 
         {
            pokelist? pokelist.map((pokemon, index) => {
               return (
                  <Card key={index} pokemon={pokemon}/>
               )
               return (<p key={index}>{pokemon.name}</p>)
            }) : null
         }
      </Container>
   )
   
}

export default Gallery;