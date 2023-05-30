import NavBar from "../componentes/Navbar";
import Banner from "../componentes/Banner";
import Botao from "../componentes/Button";
import Footer from "../componentes/Footer";
import "../App.css"

function Contato(){
    return(
        <>
        <NavBar/>
        <Banner/>
        <div className="Enviar">
            <h1>Nos Contate Aqui</h1>
            <input type="text"/>
            <Botao/>
        </div>
        <Footer/>
        </>
    )
}
export default Contato