import Home from "./home.js"
import { sound } from '../../js/data/sound.js'


const Game = (()=> {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const words = ['apple', 'ball']

  let chosenWord
  let guessingWord
  let lives
  let guesses

  const hangman = document.querySelector('.hangman')
  const init = () => {
    chosenWord = chooseWord()
    console.log(chosenWord)
    guessingWord = Array(chosenWord.length).fill('_') //Guessing word 
    guesses = []
    lives = 7
    // Showing Screen
    render()
    listeners()
  }

  const render = ()=> {
    let markup = `
      <p class= "hangman__stats">Lives: 
        <span class = "hangman__lives"> ${lives}</span>
      </p>
      <h1 class= "hangman__title">Hangman</h1>
      <canvas class "hangman__board" height="155px"></canvas>
      <div class = "hangman__word"> ${guessingWord.join('')}</div>
      <p class ="hangman__instructions">Pick a Letter Below to guess the whole word</p>

      <ul class = "hangman__letters">
      ${createLetters()}
      </ul>
      <button class ="button hangman__trigger">Main Menu</button>
      `
      hangman.innerHTML = markup
  }

  const listeners = () =>{
    hangman.addEventListener('click', e => {
      if(e.target.matches('.hangman__letter')) {
        sound.click.play()
        check(e.target.innerHTML)
      }

      if(e.target.matches('.hangman__trigger')){
        sound.click.play()
        Home.init()
      }
    })
  }
// Game Logic

  const letterTaken = (letter) => {
    return guesses.includes(letter)
  }
  const check = (guess)=> {
    if(letterTaken(guess)) return
    guesses.push(guess)


    // check of the guess exist in chosenword
    if (chosenWord.includes(guess)) {
      // update guessingword
      updateGuessingWord(guess)
      console.log(guessingWord)
    } 
    else {
      lives--
      // render board
      updateGame()
    }

  }

  const updateGame = ()=> {
    document.querySelector('.hangman__lives').innerHTML = lives
    document.querySelector('.hangman__word').innerHTML = guessingWord.join('')
    document.querySelector('.hangman__letters').innerHTML = createLetters()


  }
  const updateGuessingWord = (letter)=> {

    chosenWord.split('').forEach((elem, index)=> {
      if(elem === letter) {
        guessingWord[index] = elem
      }
    })

  }



  const createLetters = ()=>{
    let markup = ``
    letters.forEach(letter => {
      const isActive = letterTaken(letter) ? 'hangman__letter--active':''

      markup += ` 
      <li class = "hangman__letter ${isActive}">${letter}</li>
      `

    })

    return markup
  }
  
  
  const chooseWord = ()=> {
    let randomNum = Math.floor(Math.random() * words.length)

    return words[randomNum]
  }


  return {
    init
  }
})()


export default Game