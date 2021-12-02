const http = require('http')

const server = http.createServer((req,res) => {
    console.log('evento de requisição')
    res.end('ola mundo')
})

server.listen(5000,() => {
    console.log('Servidor está na porta : 5000...')
}) 

//ouvir é asincrono