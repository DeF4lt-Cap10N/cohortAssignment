const cards = document.querySelector(".cards");
const searchbtn = document.querySelector(".searchbtn");


searchbtn.addEventListener("click", function () {
    const inputval = document.querySelector(".inputcard");
    const selectType = document.querySelector(".selectbox").value;
    const num = parseInt(inputval.value);
    if (selectType != 'all' && num > 0) {
        getpokemontypescards(num, selectType);
    }
    else if (num > 0 && selectType == 'all') {
        getpokemoncards(num);
    } else {
        alert("Enter greate than 0");
    }


    inputval.value = "";
})
// https://pokeapi.co/api/v2/type/{type_name}

async function getpokemoncards(num) {
    try {
        cards.innerHTML=""
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${num}`);
        const data = await response.json();

        //    console.log(data);
        const pokemonList = data.results;

        for (const pokemon of pokemonList) {
            const pokemonRes = await fetch(pokemon.url);
            const pokemonData = await pokemonRes.json();
            console.log(pokemonData);
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <h3>${pokemonData.name}</h3>
                <img src="${pokemonData.sprites.front_default}" />
                  <p>Type: ${pokemonData.types.map(t => t.type.name).join(", ")}</p>
              `;

            cards.appendChild(card);

        }


    }
    catch (error) {
        console.log(`error brother : `, error);
    }

}



async function getpokemontypescards(num, selectType) {
    try {
        cards.innerHTML=""
        const response = await fetch(`https://pokeapi.co/api/v2/type/${selectType}`);
        const data = await response.json();

        const pokemonList = data.pokemon.slice(0, num); //extract 0 to num from api hit

        for (const it of pokemonList) {
            const url = it.pokemon.url;
            const pokemonRes = await fetch(url);
            const pokemonData = await pokemonRes.json();

            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <h3>${pokemonData.name}</h3>
                <img src="${pokemonData.sprites.front_default}" />
                  <p>Type: ${pokemonData.types.map(t => t.type.name).join(", ")}</p>
              `;

            cards.appendChild(card);
        }

    }
    catch (error) {
        console.log(`error brother : `, error);
    }

}


