// variaveis iniciais, a lista contém apenas alguns números da sequência de Fibonacci para exemplo.
let listaFibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
let valor = 10


//função para fazer a somatória dos números
function fibonacci(valor) {
    let anterior = 0;
    let atual = 0;
    let proximo = 1;


    for(let i = 0; i < valor; i++) {
        console.log(proximo);
        anterior = atual + proximo;
        atual = proximo;
        proximo = anterior;
    }
}


//imprimindo os números no console
console.log(fibonacci(10));


//verificando se o número pertence a sequência de Fibonacci
if (valor === listaFibonacci) {
    console.log("Esse número pertence a sequência de Fibonacci!");

} else {
    console.log("Esse número não pertence a sequência de Fibonacci!");

}
