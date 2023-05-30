import NavBar from "../componentes/Navbar";
import Banner from "../componentes/Banner";
import Cartoes from "../componentes/Cards";
import Footer from "../componentes/Footer";
import "../App.css"

function Home(){
    return(
        <>
            <NavBar/>
            <Banner/>
            <h1>Produtos</h1>
            <Cartoes/>
            <Footer/>
        </>
    )
}
export default Home