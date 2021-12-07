const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt',
                                {highWaterMark:9000, 
                                encoding: 'utf-8'})


// default 64kb
// las buffer - remaider
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000})
// const stream = createReadStream('../content/big.txt', { encoding:'uft-8'})

stream.on('data',(result) =>{
    console.log(result)
})
stream.on('error',(err)=> console.log(err))



/* const {readFileSync,writeFileSync} = require('fs');
console.log('começo');
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

console.log(first, second);

writeFileSync(
    './content/result-sync.txt',
    `Here  is the result : ${first}, ${second}`,
    {flag: 'a'} 
)
console.log('acabei com este teste');
console.log('começando outro teste'); */