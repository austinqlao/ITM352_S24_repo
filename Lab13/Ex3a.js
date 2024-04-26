const express = require('express'); 
const app = express(); 
const users_reg_data = require('./user_data.json'); 
app.use(express.urlencoded({ extended: true })); 
app.get("/login", function (request, response) { 
    // Give a simple login form 
    str = ` 
<body> 
<form action="/login" method="POST"> 
<input type="text" name="username" size="40" placeholder="enter username" ><br /> 
<input type="password" name="password" size="40" placeholder="enter password"><br /> 
<input type="submit" value="Submit" id="submit"> 
</form> 
</body> 
    `; 
    response.send(str); 
}); 
app.post("/login", function (request, response) { 
    // Process login form POST and redirect to logged in page if ok, back to login page if not 
    const username = request.body.username; 
    const password = request.body.password; 
    if (users_reg_data.hasOwnProperty(username) && users_reg_data[username].password === password) { 
        response.send(`<h1>${username} logged in</h1>`); 
    } else { 
        response.redirect("/login"); 
    } 
}); 
app.listen(8080, () => console.log(`listening on port 8080`));