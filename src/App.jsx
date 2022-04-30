import { useState } from 'react'

import { Container, Content, Header, Form, Input } from './styles.js'
import Gallery from './components/Gallery/Gallery'

import pokedex from './public/pokedex.png'
import pokeapi from './services/pokeapi.js';
import { useEffect } from 'react';

import Pagination from './components/Pagination/Pagination';


const LIMIT = 20;

const App = () =>  {

  const [ pokemons, setPokemons ] = useState([]);
  const [ text, setText ] = useState('');
  const [ offset, setOffset ] = useState(0);

  useEffect(() => {

    // const query = {
    //   page: {
    //     limit: LIMIT,
    //     offset,
    //   }
    // };

    // if(text){
    //   query.pokemon = {
    //     text
    //   }
    // }

    pokeapi.get(`pokemon/?${text}limit=${LIMIT}&offset=${offset}`)
    // pokeapi.get(`pokemon/?${text}limit=${LIMIT}&offset=${offset}`)
      .then((response) => setPokemons(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
     });
  }, [text, offset])
  
  return (
    <Container>
      <Content>
         <Header image={pokedex} />
         <Form> 

        <Input
          placeholder="Search your Pokémon!"
          type="text"
          value={text}
          // onChange={(search) => setText(search.target)}
        /> 
        {/* <Input
          placeholder="E-mail"
          type="text"
          name="email"
        />  */}
         </Form>


        <h1> Pokedex </h1>
        
        <Gallery pokelist={pokemons.results} />
        {/* {pokemons && ( reutnr Pagination)} */}
        <Pagination limit={LIMIT} total={pokemons.count} offset={offset} setOffset={setOffset}></Pagination>
      
      </Content>
    </Container>
  )
}

export default App
