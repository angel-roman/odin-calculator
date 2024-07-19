const display = document.getElementById("display");
var operatorPressed = false;
var pendingOp = false;
var num2 = "0";
var numInMem = "0";
var operator = "";
var lastPressed = "";
var result = 0.0;


function numberPressed(num){
    if(display.textContent == "Infinity"){
        clearAll();
    }
    switch(lastPressed){
        case "": display.textContent = num;
                break;
        case "num": display.textContent += num;
                break;
        case "op": display.textContent = num;
                break;
        case "equal": display.textContent = num;
                break;
    }
    lastPressed = "num";
}


function getOperator(op){
    if(display.textContent == "Infinity"){
        clearAll();
    }
    switch(op){
        case "add": operator = "add";
            break;
            case "min": operator = "min";
            break;
            case "mul": operator = "mul";
            break;
            case "div": operator = "div";
            break;
     }
     lastPressed = "op";
     numInMem = display.textContent;
}

function getResult(){
    if(display.textContent == "Infinity"){
        clearAll();
    }
    if(lastPressed == "num"){
        num2 =  display.textContent;
        switch(operator){
            case "add": result = parseFloat(numInMem) + parseFloat(num2);
                break;
            case "min": result = parseFloat(numInMem) - parseFloat(num2);
                break;
            case "mul": result = parseFloat(numInMem) * parseFloat(num2);
                break;
            case "div": result = parseFloat(numInMem) / parseFloat(num2);
                break;
         }
    }
    if(lastPressed == "equal"){
        switch(operator){
            case "add": result = parseFloat(result) + parseFloat(num2);
                break;
            case "min": result = parseFloat(result) - parseFloat(num2);
                break;
            case "mul": result = parseFloat(result) * parseFloat(num2);
                break;
            case "div": result = parseFloat(result) / parseFloat(num2);
                break;
        }
    }
    display.textContent = result.toString();
    lastPressed = "equal";
    console.log(lastPressed);
}

function clearAll(){
    display.textContent = "0";
    operatorPressed = false;
    numInMem = "0";
    num2 = "0";
    operator = "";
    lastPressed = "";
}

function addDot(){
    let check = display.textContent.includes(".");
    if(!check){
        display.textContent += ".";
    }
    lastPressed = "num";
}

function changeSign(){
    if(lastPressed != "op"){
        display.textContent = parseFloat(display.textContent) * (-1);
    }
}

function deleteNum(){
    
    if(lastPressed == "num"){
        let txt = display.textContent;
        let minSignus = txt.includes("-");
        console.log(minSignus);
        let count = txt.length;
        if(count ==2 && minSignus){
            display.textContent = "0";
            lastPressed = "";
        }
        if(count <= 1 && !minSignus){
            display.textContent = "0";
            lastPressed = "";
        }
        else{
            txt = txt.substring(0, count-1);
            display.textContent = txt;
            console.log(txt);
        }
    }
}