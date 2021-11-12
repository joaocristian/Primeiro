const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end ('bem vindo ao nossa pagina inicial')
    }

    if (req.url === '/about'){
        res.end('Aqui é um pequeno historico')
    }

    res.end(`
        <h1>Ops!</h1>
        <p>Não podemos encontrar sua pagina</p>
        <a href="/">back home</a>
    `)
})

server.listen(5000)