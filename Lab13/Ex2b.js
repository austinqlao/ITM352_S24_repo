const fs = require('fs'); 

const filename = 'user_data.json'; 

 

if (fs.existsSync(filename)) { 

    const stats = fs.statSync(filename); 

    console.log(`${filename} has ${stats.size} characters.`); 

} else { 

    console.log(`${filename} does not exist.`); 

} 