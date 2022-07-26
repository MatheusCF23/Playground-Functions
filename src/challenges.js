// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let divide = string.split(' ');
  return divide;
}

// Desafio 4
function concatName(arrayStr) {
  return `${arrayStr[arrayStr.length - 1]}, ${arrayStr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let maior = Math.max(...numbers);
  let repete = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === maior) {
      repete += 1;
    }
  }
  return repete
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mensagem = '';
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    mensagem = 'os gatos trombam e o rato foge';
  }
  else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    mensagem = 'cat2';
  }
  else {
    mensagem = 'cat1'
  }
  return mensagem;
}

// Desafio 8
function fizzBuzz(numerosDivisiveis) {
  let newArray = [];
  for (let i = 0; i < numerosDivisiveis.length; i += 1) {
    if (numerosDivisiveis[i] % 3 === 0 && numerosDivisiveis[i] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (numerosDivisiveis[i] % 3 === 0) {
      newArray.push('fizz');
    } else if (numerosDivisiveis[i] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}
fizzBuzz([2, 15, 7, 9, 45]);
fizzBuzz([7, 9]);
fizzBuzz([9, 25]);

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
