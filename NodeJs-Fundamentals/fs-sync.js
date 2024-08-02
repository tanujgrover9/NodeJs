const {readFileSync, writeFileSync}= require('fs');
// const fs= require('fs');
// fs.readdirSync

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
console.log(first);
console.log(second);
writeFileSync('./content/writeFs.txt',`This is the writefs text and ${first}, ${second}`,{flag:'a'}) 