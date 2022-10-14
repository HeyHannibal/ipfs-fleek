function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomEvenInt(min, max) {
  let random = randomInt(min, max);
  if (random % 2 === 0) return random;
  else random + 1 > max ? (random = random - 1) : (random = random + 1);
  return random;
}
let chance = (trudat, fals) => {
  let chances = Array(trudat);
  chances.fill(true, 0, trudat);
  for (let i = 0; i < fals; i++) {
    chances.push(false);
  }
  return chances;
};
let chances = (truee, falsee) => chance(truee, falsee)[randomInt(0, truee + falsee)];

function theNullififcator() {
  g.forEach((point, index) => {
    if (index % 2 > 0)
      g[index].forEach((pointObj, indx) => {
        if (indx % 2 > 0) {
          g[index][indx] = null;
        }
      });
  });
}
