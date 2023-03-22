fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json())
    .then(data => (
        //console.log(data)
        data.results.forEach(poke => {
            //const array = [];
            console.log(poke.name);
            //array.push(poke)
            //console.log(array);
            

        })
    ))
    .catch(err => console.log(err))
