import './Card.css'
import { Link } from 'react-router-dom'

function Card({props, largura, altura, descricao = false}){

    const estiloFoto = {
        width: largura,
        height: `calc(${altura} - 15vh)`,
        backgroundImage: `url(${props.photo_url})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    const tamanhoCard = {
        width: largura,
        height: altura,
        margin: '30px'
    }

    return (
        <>
            <div style={tamanhoCard}>
                <Link to={`/produto/${props.id}`}>
                    <div className='imagem' style={estiloFoto}></div>
                    <div className="info">
                        <p style={{paddingTop:'5px', margin:'0px', fontSize:'25px'}}>{props.name}</p>
                        <p>R$ {props.price}</p>
                        { descricao && <p>{props.description}</p>}
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Card