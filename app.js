/*
BASIC CONDITIONS:

Player initial stack, 50. If double stack, player quit. If Stack less then 100 gamble until his broke

*/
let funds = 50
let bets = {}
let hand = []

function randomInteger() {
  Math.floor(Math.random() * 6)
}

function randFace () {
  console.log('random Face')
}

// Object property assignment
bets['heart'] = 5
bets[randFace()] = 5

//Adding elements to an array
hand.push(randFace())

let arithimetics1 = funds - totalBet
let arithimetics2 = funds + winnings

// Flowchart decision path
