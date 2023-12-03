import './Produto.css'
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../contexts/productContext';

function Produto(){

    const [data, setData] = useState([]);
    const productsContext = useContext(ProductContext)

    const parms = useParams()

    useEffect(() => {
       const produtoClicado = productsContext.products.filter((product)=> product.id == parms.id)
       setData(produtoClicado[0])
    }, [parms.id, productsContext.products]);

    return (
        <>
            <Header title={"JOGOS"}/>

            <div className="centro">
                <Card  props={data} largura={'150vh'} altura={'70vh'} descricao={true}/>
            </div>
        </>
    )
}

export default Produto