const os = require('os');
// console.log(os.cpus().length);
const fs = require('fs');
const res = fs.writeFileSync('context.txt');
console.log(res)