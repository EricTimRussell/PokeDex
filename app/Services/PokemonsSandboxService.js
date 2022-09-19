import { appState } from "../AppState.js"
import { SandboxPokeman } from "../Models/SandboxPokeman.js"
import { Pop } from "../Utils/Pop.js"
import { SandboxServer } from "./AxiosService.js"

class PokemonsSandboxService {
  async catchPokemon() {
    if (appState.selectedPokemon) { return }
    const alreadyCaught = appState.sandboxPokemon.find(s => s.name == appState.selectedPokemon.name)
    if (alreadyCaught)
      Pop.toast('Dont be greedy')
    const res = await SandboxServer.post(`/api/${appState.user}/pokemon`, appState.selectedPokemon)
    const newPokemon = new SandboxPokeman(res.data)
    appState.sandboxPokemon = [...appState.sandboxPokemon, newPokemon]

  }

  async getPokemon() {
    const res = await SandboxServer.get(`/api/${appState.user}/pokemon`)
    appState.sandboxPokemon = res.data.map(p => new SandboxPokeman(p))
  }

}


export const pokemonsSandboxService = new PokemonsSandboxService