const fs = require('fs'); 

const filename = 'user_data.json'; 

 

if (fs.existsSync(filename)) { 

    const data = fs.readFileSync(filename, 'utf-8'); 

    const users_reg_data = JSON.parse(data); 

    console.log(users_reg_data); 

} else { 

    console.log(`${filename} does not exist.`); 

} 