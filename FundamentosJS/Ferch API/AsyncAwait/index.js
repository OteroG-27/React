const obtenerPokemones = async() => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const {results} = await res.json();
        console.log(results);
        results.forEach(poke => {
            console.log(poke.name,poke.url);
        });
    } catch (error) {
        console.log(error);
    }
}
obtenerPokemones()