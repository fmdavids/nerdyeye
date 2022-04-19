//Path Module

const path = require('path')

// console.log(path)
// console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'readme.txt')

// console.log(filePath)

const base = path.basename(filePath)
// console.log(base)

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'readme.txt')
const absolute = path.resolve('content', 'subfolder', 'readme.txt')