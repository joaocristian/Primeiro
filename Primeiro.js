//npm - global command, comes with node
// npm --version
//npm --v

//local dependency - use int only in this particular porject
//npm i <packageName>

// global dependency - use it in any project
//npm install -g <packageName>
//sudo npm instal -g <packageName> (mac)

//package.json - manisfest file (stores important info about project/package)
//manual approach (create package.json in the root, create properties ect)
//npm init (step by step, press enter to skip)
//npm init -y (everthing defalut)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
console.log('Hello people')