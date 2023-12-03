import { useState } from "react";
import './Formulario.css'
import usePost from "../../hooks/usePost";

function Formulario(){

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        photo_url: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };


    const handleSubmit = async () =>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        await usePost(formData, "http://localhost:3001/products")
    }

    return (
        <>
            <form className="background">
                <h2>NOVO JOGO</h2>
                <div>
                    <label className="nomeDoCampo">Nome</label><br/>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/><br/>
                </div>

                <div>
                    <label className="nomeDoCampo">Preço</label><br/>
                    <input type="number" name="price" value={formData.price} onChange={handleChange}/><br/>
                </div>

                <div>
                    <label className="nomeDoCampo">Descrição</label><br/>
                    <input type="text" name="description" value={formData.description} onChange={handleChange}/><br/>
                </div>
                
                <div>
                    <label className="nomeDoCampo">Capa</label><br/>
                    <input type="text" name="photo_url" value={formData.photo_url} onChange={handleChange}/><br/>
                </div>
                
                <button className="botaoEnviar" onClick={handleSubmit}>Enviar</button>
            </form>
        </>
    )
}

export default Formulario