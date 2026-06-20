function calculator(operation){
    console.log("Calculating");
    console.log(operation)
    console.log(operation(4,2))
    return "Sucessfully performed the operations"
}

function add(num1, num2){
    console.log("Addition:-")
    return num1 + num2;
}

function sub(num1,num2){
    console.log("Substract: ")
    return num1 - num2;
}

console.log(calculator(add));
console.log(calculator(sub))