import { useEffect, useState } from "react"

export const useCharacters = (pagina, buscarPer, especie) => {
    const [characters, setCharacters] = useState([])
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}&name=${buscarPer}&species=${especie}`)
            const data = await response.json()
            setCharacters(data.results)
            setTotalPages(data.info.pages)
        }

        fetchData();
    }, [pagina, buscarPer, especie])

    return { characters, totalPages }
}
