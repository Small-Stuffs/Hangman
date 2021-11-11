import { sound } from '../../js/data/sound.js'
import Home from "./home.js";

const Instruction = (()=> {
  const init = () => {

    render()
    listener()
  }

  const hangman = document.querySelector('.hangman')
 
  const listener = ()=>{
    document.querySelector(".hangman__trigger").addEventListener("click", _ => {
      sound.click.play();
      Home.init();
    })


  }

  const render = () => {
    let markup = `
      <h1 class="hangman__title">Instructions</h1>
      <ul class="how">
        <li>Alright here is how you play!</li>
        <li>When you start a new game, the game will automatically choose a random word</li>
        <li>Your job is to guess that chosen word completely by guessing a letter at a time by clicking on the buttons</li>
        <li>If you succesfully guess the word within 7 tries, you win or else you lose</li>
        <li>If you lose, you will be hanged without a mercy.</li>
      </ul>
      <button class="button hangman__trigger">Main Menu</button>

    `
    hangman.innerHTML = markup;
  }


  return {
    init
  }
})()


export default Instruction