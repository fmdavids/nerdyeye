//Operating System Modules

const os = require('os');

console.log(os)

const userInfo = os.userInfo()

console.log(userInfo.username)

const upTime = `Your uptime is ${os.uptime()} seconds`

console.log(upTime)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);