//callbacks.js

//synchronous example 
console.log('1.start');

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Nabil"));
console.log("2. End");

//Asynchronous with callbacks
console.log("\n--- Asynchronous Example ---");
console.log("1.start");

function delayedGrerting(name,callback) {
    setTimeout(() => {
        const message = `Hello, ${name}!`;
        callback(message);
    },2000); 
}

delayedGrerting("Alice", (message) => {
    console.log(message);
});

console.log("2.End (this appears before the greetings!)");

//Callback hell example (what we want to avoid)
console.log("\n--- callback Hell example ---");

function step1(callback){
    setTimeout(()=> {
        console.log("Step 1 completed");
        callback(null, "result1");

    }, 1000);
}

function step2(data,callback){
    setTimeout(()=> {
        console.log("step 2 completed with:", data);
        callback(null, "result2");
    }, 1000);
}

function step3(data,callback){
    setTimeout(()=> {
        console.log("step 3 completed with:", data);
        callback(null, "result3");
    }, 1000);
}

//this is callback hell - hard to read and maintain
step1((err, result1) => {
    if (err) throw err;
    step2(result1, (err, result2) => {
        if (err) throw err;
        step3(result2, (err,result3) => {
            if (err) throw err;
            console.log("All steps completed:", result3);
        });

    });
});