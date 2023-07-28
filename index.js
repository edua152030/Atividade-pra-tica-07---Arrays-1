/**1. Criar um array e percorrê-lo utilizando o loop for
a. Crie um array com o nome "nomes" e adicione 4 nomes de
pessoas que você conhece
b. Utilize o loop for para percorrer o array e exibir os nomes na
tela

const nomes = ['eduardo', 'joao', 'marcelo', 'lucas']

for (const nome of nomes) {
    console.log(nome)
}*/

/**2. Criar um array e percorrê-lo utilizando o loop for of
a. Crie um array com o nome "numeros" e adicione 5 números de
sua escolha
b. Utilize o loop for of para percorrer o array e exibir a soma dos
números na tela 

const numeros = []

for (i = 1; i < 6; i++) {
    numeros.push(prompt('digite um numero'))
}
 for (const numero of numeros) {
     document.write(numero)
 }*/

 /**3. Utilizar os métodos push, pop, unshift e shift para manipular um
array
a. Crie um array com o nome "frutas" e adicione 3 tipos de frutas
de sua escolha
b. Utilize o método push para adicionar uma fruta no final do
array
c. Utilize o método pop para remover a última fruta do array
d. Utilize o método unshift para adicionar uma fruta no início do
array
e. Utilize o método shift para remover a primeira fruta do array
f. Exiba o array resultante na tela 

const frutas = ['melancia', 'maca', 'uva']

console.log(frutas)
frutas.push('pera')
console.log(frutas)
frutas.pop()
console.log(frutas)
frutas.unshift('acerola')
console.log(frutas)
frutas.shift()
console.log(frutas)
*/