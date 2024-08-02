const {readFile, writeFile} = require('fs').promises;
// const util=require('util')

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async()=>{
    try{
        const first = await readFile('./content/first.txt','utf8')
        const second = await readFile('./content/second.txt','utf8')
        await writeFile('./content/result-multiple.txt',
            `This is the 2nd result : ${first} and ${second}`);
            console.log(first,second)


    }
    catch(err){
        console.error(err)
    }
}
start();


/////////////////////////////////////////////////////

// const { error } = require('console');
// const {readFile, writeFile} = require('fs');
// const util=require('util')
// const { result } = require('lodash');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async()=>{
//     try{
//         const first = await readFilePromise('./content/first.txt','utf8')
//         const second = await readFilePromise('./content/second.txt','utf8')
//         await writeFilePromise('./content/result-multiple.txt',
//             `This is the result : ${first} and ${second}`);
//             console.log(first,second)


//     }
//     catch(err){
//         console.error(err)
//     }
// }
// start();



//////////////////////////////////////////////////////////////

// const getText = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err) reject(err);
//             else resolve(data);
//     })
// })
// }

// const start = async()=>{
//     try{
//         const first = await getText('./content/first.txt');
//         const second = await getText('./content/second.txt');
//         console.log(first);
//         console.log(second);

//     }
//     catch(err){
//         console.error(err);
//     }
// }

// start()


// getText('./content/first.txt')
// .then((result)=>console.log(result))
// .catch((error)=>console.log(err))