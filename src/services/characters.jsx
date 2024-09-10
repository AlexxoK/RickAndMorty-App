export const reqCharacters = async (pagina, buscar) => {
    let url = `https://rickandmortyapi.com/api/character?page=${pagina}`
    
    if (buscar !== null && buscar !== "") {
        url = `https://rickandmortyapi.com/api/character?name=${buscar}&page=${pagina}`
    }

    const resp = await fetch(url)
    const data = await resp.json()

    return data;
}
