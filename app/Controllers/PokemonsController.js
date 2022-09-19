import { appState } from "../AppState.js"
import { pokemonsService } from "../Services/PokemonsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawPokemon() {
  let template = ''
  appState.pokemon.forEach(p => template += p.ListTemplate)
  setHTML('pokemon list', template)
}
export class PokemonsController {
  constructor() {
    appState.on('pokemon', _drawPokemon)
    this.getPokemon()
  }
  async getPokemon() {
    try {
      await pokemonsService.getPokemon()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async getPokemanDetails(url) {
    try {
      await pokemonsService.getPokemanDetails(url)
    } catch (error) {
      console.error(error, 'get poke details')
      Pop.error(error)
    }
  }


}