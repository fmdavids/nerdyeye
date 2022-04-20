const fs = require('fs')

// Delete Folder 

fs.rm('./deleteMe', {recursive: true}, (err) =>{
    if(err){
        console.log(err)
    }
    console.log('successful')
})