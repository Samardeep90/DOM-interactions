// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)

}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeblue)
    dots[i].addEventListener('dblclick', hide)
    

  }
  
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  updateCounts()
}
function makeblue (evt) {
  evt.target.classList.toggle('blue')
  updateCounts()
}


function hide (evt) {
  evt.target.classList.toggle('invisible')
  updateCounts()

}
function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  
  }

  
  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS
  function blueCount (){
    var count = document.getElementsByClassName("blue")
    var sumCount = count.length
    totals.blue = sumCount
  }

  function greenCount (){
    var count = document.getElementsByClassName("green")
    var sumcount = count.length
    totals.green = sumcount
  }

  function invisibleCount (){
    var count = document.getElementsByClassName("invisible")
    var sumcount =count.length
    totals.invisible = sumcount
  }
   
  blueCount()
  greenCount()
  invisibleCount()
    
   // Once you've done the counting, this function will update the display
  
   displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  
  }
}
