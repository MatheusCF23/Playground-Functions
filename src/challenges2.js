// Desafio 11
function generatePhoneNumber(arr) {
  if(arr.length !== 11){
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < arr.length; i += 1){
    if(arr[i] < 0 || arr[i] > 9){
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let i = 0; i < arr.length; i += 1){
    let cont = 0;
    for (let j = 0; j < arr.length; j += 1){
       if(arr[i] === arr[j]){
        cont+=1;
        if(cont >=3){
          return 'não é possível gerar um número de telefone com esses valores';
        }
       }
    }
  }
  return ('('+ arr[0]+arr[1]+') '+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+'-'+arr[7]+arr[8]+arr[9]+arr[10]);

}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if(((lineA + lineB) < lineC) || ((lineC + lineB) < lineA) || ((lineC + lineA) < lineB)){
    return false;
  }
  if((Math.abs(lineA - lineB) > lineC) || (Math.abs(lineC - lineB) > lineA) || (Math.abs(lineC - lineA) > lineB)){
    return false;
  }
  return true;
}

// Desafio 13
function hydrate() {
  function hydrate(str) {
    let cont = 0;
    let arr = str.match(/\d+/g);
    for (let val of arr){
      cont += parseInt(val);
    }
    if(cont > 1){
      return (`${cont} copos de água`);
    } else {
      return (`${cont} copo de água`);
    }
    
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
