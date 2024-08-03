const outputScreen = document.querySelector(".result-screen");
let num1 = 0;
let num2 = 0;
let operator = "";

/*///////////////////////////
    basic-button
///////////////////////////*/

document.querySelector(".button-c").addEventListener("click", function(){
    outputScreen.innerText = "";
});

document.querySelector(".button-1").addEventListener("click", function(){
    outputScreen.innerText = outputScreen.innerText + "1";
});

document.querySelector(".button-2").addEventListener("click", function(){
    outputScreen.innerText = outputScreen.innerText + "2";
});

document.querySelector(".button-3").addEventListener("click", function(){
    outputScreen.innerText = outputScreen.innerText + "3";
});
document.querySelector(".button-4").addEventListener("click", function(){
    outputScreen.innerText = outputScreen.innerText + "4";
});

document.querySelector(".button-5").addEventListener("click", function(){
    outputScreen.innerText = outputScreen.innerText + "5";
});
document.querySelector(".button-6").addEventListener("click", function(){
    outputScreen.innerText = outputScreen.innerText + "6";
});
document.querySelector(".button-7").addEventListener("click", function(){
    outputScreen.innerText = outputScreen.innerText + "7";
});
document.querySelector(".button-8").addEventListener("click", function(){
    outputScreen.innerText = outputScreen.innerText + "8";
});
document.querySelector(".button-9").addEventListener("click", function(){
    outputScreen.innerText = outputScreen.innerText + "9";
});
document.querySelector(".button-0").addEventListener("click", function(){
    outputScreen.innerText = outputScreen.innerText + "0";
});
document.querySelector(".button-del").addEventListener("click", function(){
    outputScreen.innerText = outputScreen.innerText.substring(0,outputScreen.innerText.length - 1);
});

/*///////////////////////////
    operator functions
///////////////////////////*/

document.querySelector(".button-×").addEventListener("click", function(){
    num1 = parseInt(outputScreen.innerText);
    outputScreen.innerText = "0";
    console.log(num1);
    operator = "*"
    
});

document.querySelector(".button-÷").addEventListener("click", function(){
    num1 = parseInt(outputScreen.innerText);
    outputScreen.innerText = "0";
    console.log(num1);
    operator = "/"
    
});

document.querySelector(".button--").addEventListener("click", function(){
    num1 = parseInt(outputScreen.innerText);
    outputScreen.innerText = "0";
    console.log(num1);
    operator = "-"
    
});

document.querySelector(".button-plus").addEventListener("click", function(){
    num1 = parseInt(outputScreen.innerText);
    outputScreen.innerText = "0";
    console.log(num1);
    operator = "+"
    
});

/*///////////////////////////
    num2 and equal function
///////////////////////////*/

document.querySelector(".button-equals").addEventListener("click", function(){
    num2 = parseInt(outputScreen.innerText);
    console.log(num2);
    if(operator === "*"){
        outputScreen.innerText = multiply(num1, num2);
    }
    else if(operator === "/"){
        outputScreen.innerText = division(num1, num2);
    }
    else if(operator === "+"){
        outputScreen.innerText = addition(num1, num2);
    }
    else if(operator === "-"){
        outputScreen.innerText = subtraction(num1, num2);
    }
});

function multiply(num1, num2){
    return num1 * num2;
}
function division(num1, num2){
    return Math.round(num1 / num2);
}
function addition(num1, num2){
    return num1 + num2;
}
function subtraction(num1, num2){
    return num1 - num2;
}