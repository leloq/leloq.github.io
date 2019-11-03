




/*

var todos = [
    "snack",
    "fug",
    "greet"];
    
for (var i=0; i < todos.length; i++){
    todos[i] = todos[i] + "!";
    console.log(todos[i]);
}


todos.forEach(function(todo, i){
    console.log(todo, i);
    
});



var database = [
    {
    username:"leo",
    password:"husk"
},

{username: "bernd",
password: "bernd"
}

]


var newsfeed = [
    {
        username: "sally",
      tweet: "i love this"}
    ,
    {
        username: "mordy",
        tweet: "i hate it"
}
    
    ]
    



var userNamePrompt = prompt("Whats your username?");
var passwordpromt = prompt("Whats your password?");

function signIn (user, pass) {
    
    var loginSuccesful = false; 
    
    
    database.forEach(function(user, i){
    console.log(user, i);
    if (database[i].username===user){
        
        if (user===database[i].username && pass ===database[i].password){
        console.log(newsfeed);
        loginSuccesful = true; 
         
    }} 
        
    
    
});
    
    
if (loginSuccesful===false){
    alert("User nicht in Datenbank.")
}
    

    
   
};

signIn(userNamePrompt, passwordpromt);

*/