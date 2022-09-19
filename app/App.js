import { PokemonsController } from "./Controllers/PokemonsController.js";
import { PokemonsSandbox } from "./Controllers/PokemonsSandbox.js";
import { SelectedPokemons } from "./Controllers/SelectedPokemons.js";
import { SandboxPokeman } from "./Models/SandboxPokeman.js";


class App {
  pokemonsController = new PokemonsController()
  selectedPokemons = new SelectedPokemons()

  pokemonsSandbox = new PokemonsSandbox()
}

window["app"] = new App();
