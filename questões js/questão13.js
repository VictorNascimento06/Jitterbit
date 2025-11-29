let idade = 21;
let temCarteira = false;
let estaBebado = false;

if (idade >= 18 && temCarteira == true && estaBebado == false) {
    console.log("Pode dirigir");
}
else if(estaBebado == true){
    console.log("Não pode dirigir tá bebo");
}
else if(idade < 18){
    console.log("Não pode é menor de idade");
}
else if(temCarteira == false){
    console.log("Não inventa, jogador");
}
else{
    console.log("Não pode dirigir")
}

/* Sim, é possível ter múltiplas condições em uma estrutura.
 */