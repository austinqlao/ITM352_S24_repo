const fs = require('fs'); 

const data = fs.readFileSync('user_data.json', 'utf-8'); 

const users_reg_data = JSON.parse(data); 

console.log(users_reg_data); 