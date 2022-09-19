export class PokemanDetail {
  constructor(data) {
    this.id = data.id
    this.name = data.id
    this.types = data.types
    this.url = data.url
    this.weight = data.weight
    this.height = data.height
  }



  get CardTemplate() {
    return /*html*/ `
<div class="text-center">
    <h1>${this.name}</h1>
  </div>
  <div class="d-flex justify-content-center">
    <img src="${this.url}" alt="">
  </div>
  <div class="d-flex justify-content-center gap-4 py-3">
    <kbd>${this.height}</kbd>
    <kbd>${this.weight}</kbd>
    <kbd>${this.types}</kbd>
  </div>
  <div class="d-flex justify-content-center py-5">
    <button class="btn btn-light text-danger mdi mdi-pokeball" onclick="app.PokemonSandbox.catchPokemon('${this.name}')">Catch</button>
</div>
    `


  }


}