/* A)
function dividirNumeros(number1, number2) {
    try
    {
        if (number2 === 0)
        {
            throw new Error("Divisão por zero não é permitida.");
        }

        return number1 / number2;

    }
    catch (error)
    {
        return "Erro: " + error.message;
    }
}
console.log(dividirNumeros(20, 2));

me retornou o resultado = 10.

 */
/* B)
function dividirNumeros(number1, number2) {
    try
    {
        if (number2 === 0)
        {
            throw new Error("Divisão por zero não é permitida.");
        }

        return number1 / number2;

    }
    catch (error)
    {
        return "Erro: " + error.message;
    }
}
console.log(dividirNumeros(6, 0));

me retornou = Divisão por zero não é permitido
 */
/* C)
function dividirNumeros(number1, number2) {
    try
    {
        if (number2 === 0)
        {
            throw new Error("Divisão por zero não é permitida.");
        }

        return number1 / number2;

    }
    catch (error)
    {
        return "Erro: " + error.message;
    }
}
console.log(dividirNumeros(21, 3));

me retornou = 7
 */