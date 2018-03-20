document.addEventListener("DOMContentLoaded", function() {
search()

})

class Pokemon{
  constructor(name, front, back){
    this.name = name
    this.front = front
    this.back = back
  }

  render(){
    let outerOuterDiv = document.getElementById('pokemon-container')

    let outerDiv = document.createElement('div')
    outerDiv.setAttribute("class", "pokemon-container")

    let innerDiv = document.createElement('div')
    innerDiv.setAttribute("style", "width:230px;margin:10px;background:#fecd2f;color:#2d72fc")
    innerDiv.setAttribute("class", "pokemon-frame")

    let heading = document.createElement('h1')
    heading.setAttribute("class", "center-text")
    heading.innerText = this.name

    let innerInnerDiv = document.createElement('div')
    innerInnerDiv.setAttribute("style", "width:239px;margin:auto")

    let innerInnerInnerDiv = document.createElement('div')
    innerInnerInnerDiv.setAttribute("style", "width:96px;margin:auto")

    let img = document.createElement('img')
    img.setAttribute("src", this.front)

    let flip = document.createElement('p')
    flip.setAttribute("style", "padding:10px")
    flip.setAttribute("class", "center-text flip-image")
    flip.setAttribute("data-pokename", this.name)
    flip.setAttribute("data-action", "flip-image")
    flip.innerText = "flip card"
    flip.addEventListener("click", () => {
      img.src === this.front ? img.src = this.back : img.src = this.front
    })

    outerDiv.append(innerDiv)
    innerDiv.append(heading)
    innerDiv.append(innerInnerDiv)
    innerInnerDiv.append(innerInnerInnerDiv)
    innerInnerInnerDiv.append(img)
    innerDiv.append(flip)

    outerOuterDiv.append(outerDiv)
  }

}

function createPokemon(){
  return pokemons.pokemons.map(pokemon => {
    return new Pokemon(pokemon.name, pokemon.sprites.front, pokemon.sprites.back)
  })
}

function search(){
  let searchVal = ""
  let search = document.getElementById("pokemon-search-input")
  search.addEventListener("keydown", (e) => {
    if(e.key === "Backspace"){
      searchVal = searchVal.substring(0, searchVal.length - 1)
    }else{
    searchVal += e.key
    }
    let pokemons = createPokemon().filter(pokemon => pokemon.name.includes(searchVal))
    document.getElementById("pokemon-container").innerHTML = "";
    for(let pokemon of pokemons){
      pokemon.render()
    }
  })
}
