import { PokemanDetail } from "./PokemanDetail.js";


export class SandboxPokeman extends PokemanDetail {

  constructor(data) {
    super(data);
    this.nickName = data.nickName
    this.img = data.img
  }




  get ListTemplate() {
    return /*html*/`
    <div>
    <div class="border border-dark elevation-3 selectable" onclick="app.pokemonsController.getPokemanDetails('${this.url}')">
     <p class="mdi mdi-pokeball"><b>${this.name}</b>
     </p>
     <img src="https://simg.nicepng.com/png/small/188-1880763_393piplup-dp-anime-3-piplup-png.png" alt="">
    </div>
   </div>
    `


  }
}