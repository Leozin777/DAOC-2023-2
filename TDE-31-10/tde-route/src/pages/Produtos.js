import { useNavigate, useParams } from "react-router-dom"
import Header from "../components/Header"

function Produtos() {

    const navigate = useNavigate()
    const parms = useParams()

    function handleClick(id){
        navigate(`${id}`)
    }

    return(
        <>
            <Header title={"Produtos"}/>

            <h1 onClick={() => handleClick(1)}>produto 1</h1>
            <h1 onClick={() => handleClick(2)}>produto 2</h1>
            <h1 onClick={() => handleClick(3)}>produto 3</h1>
            <h1 onClick={() => handleClick(4)}>produto 4</h1>
        </>
    )
}

export default Produtos