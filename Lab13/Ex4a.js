app.get("/register", function (request, response) { 
    // Give a simple register form 
    str = ` 
<body> 
<form action="/register" method="POST"> 
<input type="text" name="username" size="40" placeholder="enter username" ><br /> 
<input type="password" name="password" size="40" placeholder="enter password"><br /> 
<input type="password" name="repeat_password" size="40" placeholder="enter password again"><br /> 
<input type="email" name="email" size="40" placeholder="enter email"><br /> 
<input type="submit" value="Submit" id="submit"> 
</form> 
</body> 
    `; 
    response.send(str); 
}); 
app.post("/register", function (request, response) { 
    // process a simple register form 
    const username = request.body.username; 
    const password = request.body.password; 
    const repeatPassword = request.body.repeat_password; 
    const email = request.body.email; 
    if (!users_reg_data.hasOwnProperty(username) && password === repeatPassword) { 
        users_reg_data[username] = {}; 
        users_reg_data[username].password = password; 
        users_reg_data[username].email = email; 
        fs.writeFileSync('user_data.json', JSON.stringify(users_reg_data)); 
        response.redirect("/login"); 
    } else { 
        response.redirect("/register"); 
    } 
}); 