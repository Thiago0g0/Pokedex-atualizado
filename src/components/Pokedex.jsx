import { useState } from "react";
import { useEffect } from "react";
import { motion } from 'framer-motion'
import './pokedex.css'


function Pokedex({ visivel }) {
    const [id, setid] = useState(1);
    const [pokemon, setPokemon] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            setPokemon(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [id]);

    const nextPokemon = () => {
        setid(id + 1);
    }
    const previousPokemon = () => {
        setid(id - 1);
    }

    return (

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
        >
            {visivel && <div>
                <div className="pokefundo">
                    <h1>Pokédex</h1>
                    {pokemon && (
                        <div className="poketitl">
                            <h2>{pokemon.name}</h2>
                            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                        </div>

                    )}
                    <button onClick={nextPokemon}>Próximo ❯</button>
                    <button onClick={previousPokemon}>❮ Anterior</button>
                </div>
            </div>}
        </motion.div>

    )
}

export default Pokedex;