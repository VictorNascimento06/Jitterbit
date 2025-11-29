function somaImpares(n) {
    let soma = 0;

    for (let i = 1; i <= n; i += 2) {
        soma += i;
    }
    return soma;
}
console.log(somaImpares(5));
console.log(somaImpares(10));