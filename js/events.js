import {
  btnFlorestSound,
  btnRainSound,
  btnCoffeeShopSound,
  btnFireplaceSound,
  btnPlay,
  btnPause,
  btnStop,
  btnAddition,
  btnSubtraction
} from "./elements.js"


export function Events({controls, sound, timer}) {

  btnPlay.addEventListener('click', function() {
    sound.buttonPressed()
    controls.play()
    timer.countdown()
  })

  btnPause.addEventListener('click', function() {
    sound.buttonPressed()
    controls.pause()
    timer.pause()
  })

  btnStop.addEventListener('click', function() {
    sound.buttonPressed()
    controls.stop()
    timer.reset()
  })

  btnAddition.addEventListener('click', function() {
    sound.buttonPressed()
    timer.addMinutes()  
  })

  btnSubtraction.addEventListener('click', function() {
    sound.buttonPressed()
    timer.removeMinutes()
  })

  btnFlorestSound.addEventListener('click', function() {
    controls.florestSoundBackground()
    sound.playFlorestSound()
  })

  btnRainSound.addEventListener('click', function() {
    controls.rainSoundBackground()
    sound.playRainSound()
  })

  btnCoffeeShopSound.addEventListener('click', function() {
    controls.coffeeShopSoundBackground()
    sound.playCoffeeShopSound()
  })
  
  btnFireplaceSound.addEventListener('click', function() {
    controls.fireplaceSoundBackground()
    sound.playFireplaceSound()
  })
}