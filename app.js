/*
BASIC CONDITIONS:

Player initial stack, 50. If double stack, player quit. If Stack less then 100 gamble until his broke

*/
let funds = 50;
let bets = {};
let hand = [];

function rand(m, n) {
  return m + Math.floor((n - m +1) * Math.random());
}

function randFace () {
  return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0,5)];
}

console.log(randFace());

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
