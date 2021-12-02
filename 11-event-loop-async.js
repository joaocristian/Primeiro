//async versão do event loop
const {readFile} = require('fs')
const { result } = require('lodash')

console.log('Começar a primeira tarefa')
//Conferir o endereço do arquivo
readFile('content/first.txt','utf-8',(err,result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('Completado primeira tarefa')
})
console.log('Iniciando nova tarefa')