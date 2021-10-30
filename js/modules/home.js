import Game from './game.js'
import Instruction from './instruction.js'
import { sound } from '../../js/data/sound.js'


const Home = (() => {
  const hangman = document.querySelector('.hangman')

  const init = () => {
    render()
    listeners()
  }

  const render = () =>{
    let markup = ''
    markup += `
    <h1 class="hangman__title">Hangman</h1>
    <button class ="button start"> New Game</button>
    <button class ="button instruction">Instruction</button>
    `
    hangman.innerHTML = markup
  }

  const listeners = () => {
    document.querySelector(".start").addEventListener('click', ()=> {
      Game.init()
      sound.click.play()
    })
    document.querySelector(".instruction").addEventListener('click', ()=> {
      Instruction.init()
      sound.click.play
    })
    
  }




  
  return {
    init
  }
})()

Game.init()
Instruction.init()

export default Home