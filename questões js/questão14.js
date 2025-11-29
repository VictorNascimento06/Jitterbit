function verificarIdade(idade){
    try{
        if(idade <0){
            throw new Error("Idade não pode ser negativa");
        }
        if (idade > 150){
            throw new Error("Tá pouco velho em!");
        }
        console.log("Idade válidade: " + idade);
    }
    catch(erro){
        console.log("Erro: ", erro.message);
    }
}
verificarIdade(-1);
verificarIdade(25);
verificarIdade(200);

/* Try é usado para testar um código que pode gerar erros.
 */