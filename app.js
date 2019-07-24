//BASIC CONDITIONS:
//Player initial stack, 50. If double stack, player quit. If Stack less then 100 gamble until his broke

function rand(m, n) {
  return m + Math.floor((n - m +1) * Math.random());
}

function randFace () {
  return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0,5)];
}
console.log(randFace());

let funds = 50;
let round = 0;

while(funds > 1 && funds < 100) {
  round++;
  console.log(`round ${round}`);
  console.log(`\tstarting funds: ${funds}p`)
  //place bets
  let bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 };
  // roll dice

  // collect winnings
}

let totalBet = rand(1, funds);
console.log(totalBet);
if (totalBet === 7) {
  totalBet = funds;
  bets.heart = totalBet
} else {
  let remaining = totalBet;
  do {
    let bet = rand(1, remaining);
    let face = randFace();
    bets[face] = bets[face] + bet;
    remaining -= bet
  } while (remaining > 0)
}
funds -= totalBet;
console.log('\tbets: ' + Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(', ') + `(total: ${totalBet} pence`);

//ROLL DICE
const hand = [];
for(let roll = 0; roll < 3; roll++) {
  hand.push(randFace());
}
console.log(`\thand: ${hand.join(', ')}`);

let winnings = 0;
for(let die = 0; die < hand.length; die++) {
  let face = hand[die];
  if(bets[face] > 0) winnings += bets[face];
}
funds += winnings
console.log(`\twinning: ${winnings}`);
console.log(`\tending fun: ${funds}`)





// Object property assignment
//bets['heart'] = 5
//bets[randFace()] = 5

//Adding elements to an array
//hand.push(randFace())

//let arithimetics1 = funds - totalBet
//let arithimetics2 = funds + winnings

//let placeBet = roll++

/*
Flowchart decision path

Numeric comparisons (funds > 0, funds < 100)
Equality comparisons (totalBet === 7)
Logical Operators (funds > 0 && funds < 100)

*/

