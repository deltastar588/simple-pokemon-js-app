
  
  let pokemonRepository = (function () {
    let pokemonList = [
    {
      name: "Gloom",
      type: ["Poison"],
      hight: [2.07],
      ImgUrl: ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png"],
    },
    {
      name: "Vileplume",
      type: ["Grass"],
      hight: [3.11],
      ImgUrl: ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png"],
    },
    {
      name: "Paras",
      type: ["Bug", "Grass"],
      hight: [1],
      ImgUrl: ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png"],
    },
  ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return pokemonList;
  }
  function showDetails(pokemon){
  console.log(pokemon);
  let resultDiv= document.querySelector("#result");
  let Image=document.createElement("img");
  let name=document.createElement("h2");
  name.innerText=pokemon.name;
  Image.src=pokemon.ImgUrl[0];
  resultDiv.innerHTML="";
  // if here
  resultDiv.appendChild(name);
  resultDiv.appendChild(Image);
  }
  function addListItem(pokemon){
    let pokemonLi = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonLi.appendChild(listpokemon);
   // button.addEventListener('click', ()=>showDetails(pokemon));
   addButtonListener(button, pokemon);
 
  }
 function addButtonListener(button, pokemon){
   button.addEventListener('click', ()=>showDetails(pokemon));
 }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"], ImgUrl:["https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"]});

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});

  
  

  