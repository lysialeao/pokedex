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
    pokeapi.get(`pokemon/?limit=${LIMIT}&offset=${offset}`)
      .then((response) => setPokemons(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  useEffect(() => {
    pokeapi.get(`pokemon/${text}`)
      .then((response) => setPokemons(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [text]);
  
  return (
    <Container>
      <Content>
        <Header image={pokedex} />
        <Input
          placeholder="Search your Pokémon!"
          type="text"
          value={text}
          onChange={(search) => setText(search.target.value)}
        /> 

        <Gallery pokelist={pokemons.results ? pokemons.results : pokemons} list={ pokemons.results ? true : false} />
        <Pagination limit={LIMIT} total={pokemons.count} offset={offset} setOffset={setOffset}></Pagination>
      </Content>
    </Container>
  )
}

export default App
