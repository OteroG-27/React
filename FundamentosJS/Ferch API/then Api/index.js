//fetch('https://pokeapi.co/api/v2/pokemon/')
  //  .then(res => res.json())
    //.then(data => (
        //console.log(data)
      //  data.results.forEach(poke => {
            //const array = [];
        //    console.log(poke.name);
            //array.push(poke)
            //console.log(array);
            

        //})
    //))
    //.catch(err => console.log(err))
fetch(
  "https://discoveryprovider.audius.co/v1/tracks/trending?app_name-ExampleApp"
)
  .then((res) => res.json())
  .then((data) =>
    //console.log(data.data[0]),
    data.data.forEach((poke) => {
        //const array = [];
        console.log(poke.artwork);
        //array.push(poke)
        //console.log(array);
      })
  )
  .catch((err) => console.log(err));
