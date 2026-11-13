
const input = document.querySelector ('#input-Num');
const btnBuscar = document.querySelector ('#buscar');

btnBuscar.addEventListener('click', pegarValor);

function pegarValor() 
{
  const valor = input.value;
}

async function consultarPokemon (value)
{
    try
    {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
        const data = await response.json();
        console.log = data.id;
    }
    catch(erro)
    {
         console.log("Ocorreu um erro:", erro.message);
    }
    }

