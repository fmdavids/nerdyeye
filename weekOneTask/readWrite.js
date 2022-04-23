const fs = require('fs');

const makeFolder = () => {
    try{
        if(!fs.existsSync('teskFoder'))
        fs.mkdirSync('teskFoder')
        // console.log('succeful')

        fs.readFile('task1.txt', 'utf-8', (err, data) =>{
            if(err){
                console.log(err)
            }
                // console.log(data)
                fs.writeFile('written.txt', data, err =>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log('file read task1.txt and written to written.txt')                        
                    }
                })
        } )
    }catch(error){
        console.log(error)
    }
}
makeFolder()

