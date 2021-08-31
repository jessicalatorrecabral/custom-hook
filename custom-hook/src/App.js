import React, {useState} from 'react'
import useApiCall from './hook/useApiCall';

const App = () => {

  const[pokemonName, setPokemonName] = useState("") 
  const {data, isLoading, getData} = useApiCall(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

  const changePokemonName = (e) =>{
    setPokemonName(e.target.value)
  }

  return (
    <div>
      <label>Digite o nome de algum pokémon:</label>
      <input placeholder={"ex.: eevee"} value={pokemonName} onChange={changePokemonName}/>
      <button onClick={getData}>buscar pokemon</button>

      {isLoading ? <p>Carregando...</p> :
      (<>
        <p>Nome: {data.name}</p>
        <p>Peso: {data.weight} kg</p> 
      </>)}

    </div>
  )
}

export default App;
