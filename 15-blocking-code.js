const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url === '/'){
        res.end('Pagina Principal')
    }
    if (req.url === '/about'){
        //BLOCKING CODE - CODIGO DE BLOQUEIO
        for (let i = 0; i < 1000; i++){
            for (let j = 0; j < 1000; j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end('Proxima pagina')
    }
    res.end('pagina errada')
})

server.listen(5000,() => {
    console.log('Servidor está na porta 5000...')
})