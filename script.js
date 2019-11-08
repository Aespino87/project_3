
//Character Inputs

var num = '0123456789';
var lowerCase = 'abcdefghijklmnopqstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var symbl = '!@#$%^&*()_+?<>';



// User inputs for password values

var wantLower = document.getElementById ("lower");
var wantUpper = document.getElementById ("upper");
var wantNum = document.getElementById ("numbers");
var wantSymb = document.getElementById ("symbols");
var charQuant = document.getElementById ("charQuant");
var yourPwd = document.getElementById ("yourPwd");
var generate = document.getElementById ("generate");

// Function to generate Password
function generatePassword(){

    if (!wantNum.checked && !wantSymb.checked && !wantUpper.checked && !wantLower.checked){
        alert("Must pick one option!!");

    

 // Learned about return statements from Co-worker
        return;
    }

    if (charQuant.value < 8)  {
        alert("Needs more characters!!");
        return;
    }

    if  (charQuant.value > 128) {
        alert("Too many Characters");
        return;
    }
    
    var characters = ""; 

    if (wantNum.checked) {
        characters += num;

    }
    if (wantSymb.checked) {
        characters += symbl;

    }
    if (wantUpper.checked) {
        characters += upperCase;
    }

    if (wantLower.checked) {
        characters += lowerCase;
    }
     

     yourPwd.value = password(charQuant.value, characters);

     
}

// Function to post password
 function password (l,characters){
     var pwd = "";

     for ( var i = 0; i<l; i++) {
         pwd += characters.charAt(Math.floor(Math.random() * characters.length))
     }
     return pwd;
 }

 //Function to copy password

 function copyPassword(){

    document.getElementById("yourPwd").select();
    document.execCommand("Copy");
    alert("Password Copied to clipboard!")
 }

