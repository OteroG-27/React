import imgUno from '../src/assets/img/morning.png';
const Ttonbu = (props) => {
    console.log(props);
    return(
        <button className="text-align">{props.text}</button>
    )
 }
 const Online = () => {
    return (
        <div>
            <h2>online</h2>
        </div>
    )
 }
 const Offline = () => {
    return (
        <div>
            <h2>Offline</h2>
        </div>
    )
 }
 const App = () =>{
    const texto = "Lo apagao lo pinto la music hizo que los dias feos sean lindos Haciendo que lo facil sea dificil y distinto"; 
    const classs = "text-align"
    const user = true;
    //console.log(imgUno);

    const frutas = ['🍓', '🍌', '🥝']
    return (
        <>
            <h1 className="text-align">Hola Carlos Pensando En: </h1>
            <h1 className={classs}>{texto}</h1>
            <div className="text-align">
                <img src={imgUno} alt="Portatada de Morning" />
                <br />
                <br />
                <Ttonbu text='Reproducir 1' />
                <Ttonbu text='Reproducir 2' />
                <Ttonbu text='Reproducir 3' />
                <br />
                {/*Operadores Ternaros */}
                {user ? <Online />: <Offline />}
                {user && <Online />} {/*Es forma es para saltarse el else*/} 

            </div>
            <ul className='text-align'>
                {
                    frutas.map((fruta, index) => (
                        <li key={index}>
                            {fruta}
                        </li>
                    ))
                }
            </ul>
        </>
        
    )
 }
 export default App