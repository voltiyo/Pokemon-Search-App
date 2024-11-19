async function Search(){
    let pokemonName = document.getElementById("pokemon-name");
    let pokemonId = document.getElementById("pokemon-id");
    let weight = document.getElementById("weight");
    let height = document.getElementById("height");
    let Types = document.getElementById("types");
    let HP = document.getElementById("hp");
    let Attack = document.getElementById("attack");
    let Defense = document.getElementById("defense");
    let SpecialAttack = document.getElementById("special-attack");
    let specialDefense = document.getElementById("special-defense");
    let speed = document.getElementById("speed");
    let img = document.getElementById("img-container");
    let pokemon = document.getElementById("search-input").value;
    let stats = document.getElementById("stats");
    pokemon = pokemon.toLowerCase();
    
    await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemon}`)
    .then(response => response = response.json())
    .then(data => {
        Types.innerHTML = "";
        pokemonName.innerHTML = data.name.toUpperCase();
        pokemonId.innerHTML = "#"+data.id;
        weight.innerHTML = ""+data.weight;
        height.innerHTML = "" + data.height;
        data.types.forEach(type => {
            Types.innerHTML += `<p class=${type.type.name}>${type.type.name.toUpperCase()}</p>`
        });
        HP.innerHTML = "" + data.stats[0].base_stat;
        Attack.innerHTML = ""+ data.stats[1].base_stat;
        Defense.innerHTML = "" + data.stats[2].base_stat;
        SpecialAttack.innerHTML = "" + data.stats[3].base_stat;
        specialDefense.innerHTML = "" + data.stats[4].base_stat;
        speed.innerHTML = "" + data.stats[5].base_stat;
        img.innerHTML = `<img id="sprite" src="${data.sprites.front_default}">`
        stats.style.display = "block";
    })
    .catch(err =>{
        alert("Pokémon not found")
    })
}
document.getElementById("search-button").addEventListener("click", Search)