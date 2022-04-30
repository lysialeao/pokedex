const Gallery = ({pokelist}) => {
   // console.log(pokelist)

   return(
      
      pokelist? pokelist.map((pokemon, index) => {
         return (<p key={index}>{pokemon.name}</p>)
         console.log(pokemon.name)
      }) : null
   )
   
}

export default Gallery;