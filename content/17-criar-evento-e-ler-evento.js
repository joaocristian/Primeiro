const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response',(name,id)=>{
    console.log(`dado recebido do usuário ${name} com o id: ${id}`)
})

customEmitter.on('response',()=>{
    console.log(`Alguma outra informação aqui`)
})

customEmitter.emit('response', 'john', 34)