/*
BASIC CONDITIONS:

Player initial stack, 50. If double stack, player quit. If Stack less then 100 gamble until his broke

*/

// HELPER FUNCTIONS

function rand(m, n) {
  return m + Math.floor((n - m +1) * Math.random());
}

function randFace () {
  return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0,5)];
}
console.log(randFace());

let funds = 50;
let hand = [];
const bets = {
  crown: 0,
  anchor: 0,
  heart: 0,
  spade: 0,
  club: 0,
  diamond: 0,
};

let totalBet = rand(1, funds);
console.log(totalBet);
if (totalBet === 7) {
  totalBet = funds;
  bets.heart = totalBet
} else {
  console.log(bets)
}

let remaining = totalBet;
do {
  let bet = rand(1, remaining);
  let face = randFace();
  bets[face] = bets[face] + bet;
  remaining -= bet
} while (remaining > 0)

for(let roll = 0; roll < 3; roll++) {
  hand.push(randFace());
}
console.log(remaining)

// Object property assignment
bets['heart'] = 5
bets[randFace()] = 5

//Adding elements to an array
hand.push(randFace())

//let arithimetics1 = funds - totalBet
//let arithimetics2 = funds + winnings

//let placeBet = roll++

/*
Flowchart decision path

Numeric comparisons (funds > 0, funds < 100)
Equality comparisons (totalBet === 7)
Logical Operators (funds > 0 && funds < 100)

*/

while(funds > 1 && funds < 100) {
  // place bets
  funds += 2
  // roll dice

  // collect winnings
}
