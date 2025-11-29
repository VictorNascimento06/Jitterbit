function criarSenha(senha){
    try{
        if(senha.length < 6){
            throw new Error("Senha curta");
        }
        if(senha.length > 18){
            throw new Error("Senha longa demais");
        }
        if(senha === "123456"){
            throw new Error("Senha fraca demais");
        }
        if(!/[A-Z]/.test(senha)){
            throw new Error("A senha deve contar uma letra maiúscula");
        }
        if(!/[!@#$%^&*(),. ?":{}|<>]/. test(senha)){
            throw new Error("A senha deve contar um caractere especial");
        }
        console.log("Senha criada com sucesso!");
        return true;
    }
    catch(erro){
        console.log("Erro: " + erro.message);
        return false;
    }
}
criarSenha("123456");
criarSenha("123");
criarSenha("patinho123");
criarSenha("Patinho!");

/* me avalia com carinho <3
O throw é fundamental para criar aplicações mais robustas,
permitindo controlar exatamente quando e como os erros devem ocorrer
 */