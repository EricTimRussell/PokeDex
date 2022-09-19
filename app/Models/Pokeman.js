export class Pokeman {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.url = data.url
  }


  get ListTemplate() {
    return /*html*/ `
  <div>
   <div class="border border-light elevation-3 selectable text-light" onclick="app.pokemonsController.getPokemanDetails('${this.url}')">
    <p class="mdi mdi-pokeball fs-1"><b>-${this.name}</b>
    </p>
   </div>
  </div>
`

  }





}