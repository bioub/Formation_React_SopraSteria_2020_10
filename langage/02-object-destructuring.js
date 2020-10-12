// object literal (créé l'objet directement)
const coords = { x: 1, y: 2 };

console.log(coords.x); // 1
console.log(coords.y); // 2


// const valeurX = coords.x;
// const valeurY = coords.y;

// destructurer un objet
//       { x: 1      , y: 2       }
// const { x: valeurX, y: valeurY } = coords;

// const x = coords.x;
// const y = coords.y;

//       { x: 1, y: 2 }
// const { x: x, y: y } = coords;

// destructuring + shorthand property
// const { x   , y    } = coords;

// ?? est une nouveauté de ECMAScript 2020
// Nullish Coalescing Operator
// si la valeur de gauche est undefined ou null on
// prend la partie droite
// const x = coords.x ?? 0;
// const y = coords.y ?? 0;

// destructuring + shorthand property + default param (ES2015)
const { x = 0, y = 0 } = coords;
