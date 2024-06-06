import Pokedex from './components/Pokedex'
import './App.css'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Spinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 4px solid white;
  border-top: 4px solid #662C91;
  border-radius: 50%;
`

function App() {
  const [Carregando, setCarregando] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCarregando(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="center">
        {Carregando ? (
          <Spinner
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}

          />
        ) : (
          <Pokedex visivel={!Carregando} />
        )
        }

      </div>
    </>
  )
}

export default App
