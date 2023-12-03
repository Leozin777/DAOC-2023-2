import Header from "../../components/Header/Header"
import Formulario from "../../components/Formulario/Formulario"
import './Contato.css'

function Contato(){
    return (
        <>
            <Header title={"NOSSO CONTATO"}/>

            <div className="container">
                <div className="half">
                    <img alt="imagem decorativa" src="https://cdn.pixabay.com/photo/2017/08/04/10/33/background-2579715_1280.jpg"></img>
                </div>
                <div className="half">
                    <div className="half-content">
                        <Formulario/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contato