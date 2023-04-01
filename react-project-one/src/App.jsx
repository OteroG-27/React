 const Ttonbu = () => {
    return(
        <button className="text-align">Reproducir</button>
    )
 }
 const Online = () => {
    return (
        <h1>online</h1>
    )
 }
 const App = () =>{
    const texto = "Lo apagao lo pinto la music hizo que los dias feos sean lindos Haciendo que lo facil sea dificil y distinto"; 
    const classs = "text-align"
    const src = "https://w7.pngwing.com/pngs/226/796/png-transparent-milo-hd-logo.png"
    const user = false;

    return (
        <>
            <h1 className="text-align">Hola Carlos Pensando En: </h1>
            <h1 className={classs}>{texto}</h1>
            <div className="text-align">
                <img src={src} alt="img" />
                <br />
                <br />
                <Ttonbu />
                <br />
                {user ? <Online /> : ""}
            </div>
        </>
        
    )
 }
 export default App