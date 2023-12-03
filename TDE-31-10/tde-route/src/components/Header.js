import { Link } from "react-router-dom"

function Header({title}){
    return(
        <div style={{widht: "100%", height:"50px", backgroundColor: "blue"}}>
            <h1 >{title}</h1>

            <nav>
                <Link style={{marginRight: 20}} to={"/home"}>Home</Link>
                <Link to={"/produtos"}>Produtos</Link>
                
            </nav>
        </div>
    )
}

export default Header