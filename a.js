const crypto = require('crypto');

const str = 'locnelor';
const md5Hash = crypto.createHash('md5').update(str).digest('hex');
console.log(md5Hash); // 输出: a0673aea39ad90b6e667956a78b74ea3
