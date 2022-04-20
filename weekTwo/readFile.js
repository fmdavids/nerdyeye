const fs = require('fs')

// Read File

// try{
//    const data =  fs.readFileSync('./newFolder/text.txt', 'utf-8')
//    console.log(data)
// }catch(error){
//     console.log(error)
// }

// Read Assync 

fs.readFile('./newFolder/text.txt', 'utf-8', (err, data) =>{
    if(err){
        console.log(err)
    }
        console.log(data)
    
} )