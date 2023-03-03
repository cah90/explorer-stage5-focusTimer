export function Controls({
  btnFlorestSound,
  btnRainSound,
  btnCoffeeShopSound,
  btnFireplaceSound,
  btnPlay,
  btnPause,
  btnStop
}) {

  function play() {
    btnPlay.classList.add('btn-active')
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
    btnPause.classList.add('btn-active')
    btnStop.classList.remove('btn-active')
  }
  
  function pause() {
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')

  }

  function stop() {
    btnPlay.classList.remove('btn-active')
    btnPlay.classList.remove('hide')
    btnPause.classList.remove('btn-active')
    btnPause.classList.add('hide')
    btnStop.classList.add('btn-active')
  }

  function timeEnded() {
    btnPause.classList.remove('btn-active')
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
    btnPlay.classList.remove('btn-active')
    btnStop.classList.add('btn-active')

  }

  function florestSoundBackground() {
    btnFlorestSound.classList.toggle("active")

  }

  function rainSoundBackground() {
    btnRainSound.classList.toggle("active")

  }

  function coffeeShopSoundBackground() {
    btnCoffeeShopSound.classList.toggle("active")

  }

  function fireplaceSoundBackground() {
    btnFireplaceSound.classList.toggle("active")

  }

  

  return {
    play,
    pause,
    stop,
    timeEnded,
    florestSoundBackground,
    rainSoundBackground,
    coffeeShopSoundBackground,
    fireplaceSoundBackground
  }
}