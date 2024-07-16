const display = document.getElementById("display");
var operatorPressed = false;
var pendingOp = false;
var num1 = "0";
var num2 = "0";
var numInMem = "0";
var operator = "";
var lastPressed = "";
var result = 0.0;


function numberPressed(num){
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









// function numberPressed(num){
//     if(operatorPressed){
//         num1 = display.textContent;
//         display.textContent = "0";
//         operatorPressed = false;
//     }
//     txt = display.textContent;
//     txt !== "0" ? display.textContent += num : display.textContent = num;
//     }

// function getOperator(op){
//     if(pendingOp){getResult();}
//     switch(op){
//         case "add": operator = "add";
//                     break;
//         case "min": operator = "min";
//                     break;
//         case "mul": operator = "mul";
//                     break;
//         case "div": operator = "div";
//                     break;
//     }
//     operatorPressed = true;
//     pendingOp = true;
// }

// function getResult(){
//         num2 = parseFloat(display.textContent);
//         let result = 0;
//         switch(operator){
//             case "add": result = parseFloat(num1) + parseFloat(num2);
//                         display.textContent = result.toString();
//                         break;
//             case "min": result = parseFloat(num1) - parseFloat(num2);
//                         display.textContent = result.toString();
//                         break;
//             case "mul": result = parseFloat(num1) * parseFloat(num2);
//                         display.textContent = result.toString();
//                         break;
//             case "div": result = parseFloat(num1) / parseFloat(num2);
//                         display.textContent = result.toString();
//                         break;
//         }
//         num1 = result.toString();
//         num2 = "0";
//         pendingOp = false;
//     }

//     function clearAll(){
//         display.textContent = "0";
//         operatorPressed = false;
//         pendingOp = false;
//         num1 = "0";
//         num2 = "0";
//         operator = "";
//     }