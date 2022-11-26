const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
};

//Crie duas funcões que recebem como parâmetro um objeto (o objeto está pronto no arquivo JS).

/* A primeira deve retornar o objeto, alterando as propriedades dele para que os valores deste objeto fiquem em CAIXA ALTA. saída esperada:  */

/* { nome: 'ASTRODEV', profissao: 'DEV DAS ESTRELAS', username: 'ASTRODEV_LABENU', senha: 'MELHORDETODOS'} */

//teoria 1
const caixaAlta = (obj) => {
    return obj = {
        nome: obj.nome.toUpperCase(),
        profissao:obj.profissao.toUpperCase(),
        username: obj.username.toUpperCase(),
        senha: obj.senha.toUpperCase(),
    };
};
//console.log(caixaAlta(objeto));

// teoria 2
const funcaoCaixaAlta = (obj) => {
    newObject = { ...obj };

    for (index in newObject) {
        
        if (typeof newObject[index] === "string") {
            newObject[index] = newObject[index].toUpperCase()
        }
    }
    return newObject
};

//console.log(funcaoCaixaAlta(objeto))
// =====================================================================================

// 2) A segunda deve retornar os valores do objeto como texto corrido.
const textoCorrido = (texto) => {
    return `Oi meu nome e: ${objeto.nome} \n minha profissao e: ${objeto.profissao}\n Meu nome de usario e ${objeto.username} e minha senha e:  ${objeto.senha}`
};

//console.log(textoCorrido(objeto));

// =====================================================================================

// 3) Em seguida, crie uma funcão que recebe o objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.
const funcaoCallBack = (obj, callback) => {
    console.log(callback(obj))
};

funcaoCallBack(objeto, caixaAlta);
funcaoCallBack(objeto, textoCorrido);


// Chame a funcão 3, passando como argumentos o objeto passado no arquivo script.js, e a funcão 1. Repita o processo para a funcão 2

