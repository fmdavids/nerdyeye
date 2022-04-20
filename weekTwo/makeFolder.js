const fs = require('fs');

const makeFolder = () => {
    try {
        if(!fs.existsSync("newFolder")){
        fs.mkdirSync("newFolder")
        console.log(`successful`)
    }

    } catch(error){
        console.log(error)
    }
}
makeFolder()