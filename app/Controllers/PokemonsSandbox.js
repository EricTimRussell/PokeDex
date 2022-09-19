import { appState } from "../AppState.js"
import { pokemonsSandboxService } from "../Services/PokemonsSandboxService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawSandboxPokemon() {
  let template = ''
  appState.sandboxPokemon.forEach(p => template += p.ListTemplate)
  setHTML('caught pokemon', template)
}



export class PokemonsSandbox {
  constructor() {
    this.getPokemon()
    appState.on('sandboxPokemon', _drawSandboxPokemon)
  }



  async getPokemon() {
    try {
      await pokemonsSandboxService.getPokemon()
    } catch (error) {
      console.error('get sandbox pokemon', error)
      Pop.error(error)
    }
  }

  async catchPokemon() {
    try {
      await pokemonsSandboxService.catchPokemon()
    } catch (error) {
      console.error('adding pokemon', error)
      Pop.error(error)
    }
  }

}