//Crie uma função javascript que execute a soma de 2 números e coloque o resultado no console utilizando o console.log().
function sum(num1, num2) 
{
    console.log(num1 + num2);
}

sum(1, 2);


const listInt = [1,2,3,4,5,6,7,8,9,10];

function qualEParOuImpar(listInt)
{
    for(i = 0; i < listInt.length; i++)
    {
        if(listInt[i] % 2 == 0)
        {
            console.log(listInt[i] + " é par");
        }
        else
        {
            console.log(listInt[i] + " é impar");
        }
            
    }
}

qualEParOuImpar(listInt);