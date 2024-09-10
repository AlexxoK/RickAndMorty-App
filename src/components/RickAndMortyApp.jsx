import { useState } from "react"
import { useCharacters } from "../hooks/useCharacters"
import { GCharacters } from "./GCharacters"
import Pagination from "@mui/material/Pagination"
import { BuscarCharacters } from "./BuscarCharacters"
import { BuscarEspecies } from "./BuscarEspecies"

export const RickAndMortyApp = () => {
  const [pagina, setPagina] = useState(1)
  const [buscarPer, setBuscarPer] = useState("")
  const [especie, setEspecie] = useState("")
  const { characters, totalPages } = useCharacters(pagina, buscarPer, especie)

  const handleBuscar = (character) => {
    setBuscarPer(character);
  }

  const handleFiltrarEspecie = (especie) => {
    setEspecie(especie);
  }

  return (
    <>
        <GCharacters characters={characters} />
        <div className="mt-2">
            <nav className="navbar fixed-top">
            <div className="container d-flex align-items-center gap-2">
                <BuscarCharacters handleBuscar={handleBuscar} />
                <BuscarEspecies handleFiltrarEspecie={handleFiltrarEspecie} />
            </div>
            </nav>
        </div>
        <Pagination count={totalPages} page={pagina} onChange={(e, value) => setPagina(value)} className="d-flex justify-content-center mt-5"/>
    </>
  )
}
