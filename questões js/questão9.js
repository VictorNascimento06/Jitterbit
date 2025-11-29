function inverterPalavra(palavra) {
    let resultado = "";
    for (let i= 0; i < palavra.length; i++) {
        resultado = palavra[i] + resultado;
    }
    return resultado;
}
console.log(inverterPalavra("javascript"));