import React from 'react';

import { Container } from './styles.js';
import Card from '../Card/Card';

const Gallery = ({pokelist, list}) => {

   return(
      <Container> 
         {
            list ? pokelist.map((pokemon, index) => {
               return (
                  <Card key={index} pokemon={pokemon}/>
               )
               
            }) : <Card key={pokelist} pokemon={pokelist}/>
         }
      </Container>
   )
   
}

export default Gallery;