/*Sem argumentos*/

const {join, resolve} = require('path')

console.log('saída Join: ', join()) // .
console.log('Saída Resolve:', resolve(), '\n') // /home/ueliton/dev/JoinVsResolve

/*Com argumentos*/

console.log('Saída Join: ', join('d', 'f', 'a'))              // d/f/a
console.log('Saída Join: ', join('d', '/f', 'a'))            // d/f/a
console.log('Saída Join: ', join('/d', '/f', '/a'), '\n')    // /d/f/a

console.log('Saída Resolve: ', resolve('/a', 'g', 'r'))
console.log('Saída Resolve: ', resolve('a', '/g', 'r'))
console.log('Saída Resolve: ', resolve('a', '/g', '/r'))
