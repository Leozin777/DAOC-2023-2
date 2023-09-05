const data = [
    {nome:"Leonardo", idade:"22"}, 
    {nome:"Daniel", idade:25},
    {nome:"Sergio", idade:30},
];

function Inizialize(){
    const ul = document.getElementById("idUl");
    const lis = retornaLI();

    ul.innerHTML = lis;
}

function retornaLI()
{
    // data.map(item => {return `<li>nome: ${item.nome} - idade: ${item.idade}</li>`})

    return data.map(item =>{
        return `<li>nome: ${item.nome} - idade: ${item.idade}</li>`
    }).join("")
}

