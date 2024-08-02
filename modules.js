// every file is a module in itself.

const names= require('./names')
const sayHi= require('./utils')
const data =require('./alternative');
require('./alternate-2')
console.log(data)
console.log(names);

sayHi("Anshuman")
sayHi(names.name1)
sayHi(names.name2)

