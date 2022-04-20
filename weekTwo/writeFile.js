const fs = require('fs');

//write flie sync
let data = 'write on a new file'
try{
    fs.writeSync('./newFolder/index.txt', data)
    console.log('successful!')
}catch(error){
    console.log(error)
}

//write flie Async

// const data = `Fm file `
// try{
//     fs.writeFile('./newFolder/text.txt', data, err =>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log('successful')
//         }
//     })
// }catch(error){
//     console.log(error)
// }