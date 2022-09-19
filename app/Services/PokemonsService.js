import { appState } from "../AppState.js"
import { Pokeman } from "../Models/Pokeman.js"
import { PokemanDetail } from "../Models/PokemanDetail.js"
import { PokemonServer } from "./AxiosService.js"

class PokemonsService {
  async getPokemon() {
    const res = await PokemonServer.get('/api/v2/pokemon/', {
      params: {
        offset: 10,
        limit: 10
      }
    })
    appState.pokemon = res.data.results.map(p => new Pokeman(p))
  }

  async getPokemanDetails(url) {
    const res = await PokemonServer.get(url)
    appState.selectedPokemon = new PokemanDetail(res.data)
  }


}

export const pokemonsService = new PokemonsService()