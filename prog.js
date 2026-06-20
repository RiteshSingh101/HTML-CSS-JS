let a = 10
var b = 20;
const c = 200;
function test(){
    console.log("------Function scope---------")
    var city = "Pune"
    let country = "India"
    const pincode = 12345
    console.log(city)
    console.log(pincode)
    console.log(country)
}


test()
console.log("--------Global Scope-----------")
console.log(a)
console.log(b)
console.log(c)

if(true){

    console.log("-------Block scope----------")
    let eid = 123
    var ename = "Phone"
    const price = 12000
    console.log(eid)
    console.log(ename)
    console.log(price)
}
console.log("--------Var can access outside block scope-----------")
console.log(ename)
