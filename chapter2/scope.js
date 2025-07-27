//scope.js

//Gloabl scope
const globalvar = "Iam global";

function outerFunction(){
    const outerVar = "I am in outer function";

    function innerFunction() {
        const innerVar = "I am in inner function";
        console.log(globalvar);// access global
        console.log(outerVar);// access outer function variable
        console.log(innerVar); // access own variable
    }

    return innerFunction;
}

const inner = outerFunction();
inner();// this demonstrats closuer

//block scope with let/const
function blockscopeExample() {
    if (true) {
        let blockLet = "I am block scoped with let";
        const blockConst = "I am block scoped with const"
        var functionVar  = "I am function scoped with var";

        console.log(blockLet);
        console.log(blockConst);
    }

    //console.log(blockConst);//Error: not defined
    console.log(functionVar);
}

blockscopeExample();