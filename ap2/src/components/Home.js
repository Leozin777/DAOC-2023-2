import React, { useState } from 'react';
import Header from "./Header";
import Welcome from "./Welcome";
import Location from "./Location";
import Forms from './Forms';
import Cards from './Cards';

function Home() {
    const [usuarios, setUsuarios] = useState([]);

    const handleCadastro = (usuario) => {
        setUsuarios([...usuarios, usuario]);
    };

    return (
        <div>
            <Header />
            <Welcome name={"Leo"} />
            <Location />

            <div className="home-container">
                <div className="cards-container">
                    <Cards usuarios={usuarios} />
                </div>
                <div className="forms-container">
                    <Forms onCadastro={handleCadastro} />
                </div>
            </div>
        </div>
    );
}

export default Home;