import { useParams } from "react-router-dom";

export default function ProdutoDetalhe(){
    const params = useParams()

    return <h1>Produto detalhe {params.id}</h1>
}