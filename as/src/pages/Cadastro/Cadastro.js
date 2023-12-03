import Header from "../../components/Header/Header"
import Formulario from "../../components/Formulario/Formulario"
import './Cadastro.css'

function Cadastro(){
    return (
        <>
            <Header title={"CADASTRO"}/>

            <div className="container">
                <div className="half">
                    <img alt="imagem decorativa" src="https://pbs.twimg.com/media/GAZmsivX0AA0ldc?format=jpg&name=4096x4096"></img>
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

export default Cadastro