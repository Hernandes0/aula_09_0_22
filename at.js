const listadepeca = ['pecas de teste', 'AB', 'peca b'];
console.log ("Quantidade de caractres");
if (listadepeca.length <=10){
    console.log("As peçaas podem ser cadastradas");
}

for (let index = 0; index < listadepeca.length; index++){
    const pecaatual = listadepeca[index];
    if (pecaatual.length <3){
        console.log(pecaatual +": a peça possui nome inferior a 3 caracteres e não pode ser cadastrada");
    }
    else{
        console.log(pecaatual + ": a peça pode ser cadastrada");
    }
}
console.log("Peso da peça");

const pesodapecaemgramas = 50;
if (pesodapecaemgramas>=100){
    console.log("Peso sufuciente");
}
else {
    console.log("Valor insuficiente");
}