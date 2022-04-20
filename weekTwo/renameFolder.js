const fs = require('fs')

fs.rename('./newFolder/text.txt', './renamed', err =>{
    if(err){
        console.log(err)
    }
    console.log(`successful`)
})