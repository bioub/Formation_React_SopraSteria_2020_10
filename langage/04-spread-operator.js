function sum(a, b, c, d) {
  return a + b + c + d;
}

const nbs = [2, 3, 4, 5];

console.log(sum(nbs[0], nbs[1], nbs[2], nbs[3])); // 14

// SPREAD Operator
// conversion d'un tableau vers une liste de valeur
console.log(sum(...nbs)); // 14

const clone = [...nbs];

const newNbs = [1, ...nbs, 6];
