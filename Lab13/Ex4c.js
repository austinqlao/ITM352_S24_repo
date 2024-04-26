app.post("/register", function (request, response) { 

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