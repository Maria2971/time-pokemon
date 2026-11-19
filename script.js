const input = document.querySelector('#input-Num');
const form = document.querySelector('#form-pokemon');
const cards = document.querySelector('#cards');
const contador = document.querySelector('#contador');

let quantidade = 0;

// Quando clicar no botão Buscar
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const valor = input.value;

    if (valor === "") {
        alert("Digite o número de um Pokemon!");
        return;
    }

    if (quantidade >= 6) {
        alert("Seu time já está completo!");
        return;
    }

    consultarPokemon(valor);
});


async function consultarPokemon(value) {

    try {

        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${value}`
        );

        if (!response.ok) {
            alert("Pokemon não encontrado!");
            return;
        }

        const data = await response.json();

        // Criando o card do Pokemon
        cards.innerHTML += `
            <div class="card">
                <img src="${data.sprites.front_default}" alt="${data.name}">

                <h3>${data.name}</h3>

                <p>Número: ${data.id}</p>

                <p>Tipo: ${data.types.map(tipo => tipo.type.name).join(", ")}</p>
            </div>
        `;

        // Atualizando o contador
        quantidade++;
        contador.innerText = quantidade;

        // Limpando o input
        input.value = "";

    }

    catch (erro) {
        console.log("Ocorreu um erro:", erro.message);
    }
}

