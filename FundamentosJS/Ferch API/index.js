fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json())
    .then(data => (
        //console.log(data)
        data.results.forEach(poke => {
            //console.log(poke);
            console.log(poke.name);
        })
    ))
    .catch(err => console.log(err))
