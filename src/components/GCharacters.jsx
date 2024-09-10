export const GCharacters = ({characters}) => {
    return(
        <>
            <div className='mt-5 d-flex flex-row row row-cols-6'>
                {
                    characters &&
                        characters.map((char) => (
                            <div key={char.id} className="mt-5">
                                <h5 className='text-center'>{char.name}</h5>
                                <h6 className='text-center'>{char.species}</h6>
                                <img style={{width: '270px'}} src={char.image} alt='image' />
                            </div>
                        ))
                }
            </div>
        </>
    )
}
