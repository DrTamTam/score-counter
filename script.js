let homeScoreBtnOne = document.getElementById("hsbtn1")
let homeScoreBtnTwo = document.getElementById("hsbtn2")
let homeScoreBtnThree = document.getElementById("hsbtn3")
let homeScoreEl = document.getElementById("ash")
let homeScore = 0

let guestScoreBtnOne = document.getElementById("gsbtn1")
let guestScoreBtnTwo = document.getElementById("gsbtn2")
let guestScoreBtnThree = document.getElementById("gsbtn3")
let guestScoreEl = document.getElementById("asg")
let guestScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function increaseGuestScoreOne(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}


const time_el = document.querySelector("#time")
const start_botn = document.getElementById("start_btn")
const stop_botn = document.getElementById("stop_btn")

let seconds = 0
let interval = null

start_botn.addEventListener("click", start)
stop_botn.addEventListener("click", stop)

function timer() {
    seconds++

    let secs = seconds % 60
    let mins = Math.floor(seconds/60)

    if (secs < 10) secs = "0" + secs
    if (mins < 10) mins = "0" + mins
    time_el.innerText = `${mins}:${secs}`
}

function start() {
    if (interval) {
        return
    }
    interval = setInterval(timer, 1000)
}

function stop() {
    clearInterval(interval)
    interval = null
}