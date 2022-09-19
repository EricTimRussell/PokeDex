import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";

function _drawSelectedPokemon() {
  if (appState.selectedPokemon == null) { return }
  setHTML('selected pokemon', appState.selectedPokemon.CardTemplate)
}


export class SelectedPokemons {
  constructor() {
    appState.on('selectedPokemon', _drawSelectedPokemon)
  }


}