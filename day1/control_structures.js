//if statements
let score = 85;
if (score >= 90) {
    console.log("A grade");
}else if (score >=80){
    console.log("B grade");
}else{
    console.log("keep practising");
}

//for loops
for (let i = 0; i < 5; i++){
    console.log(`Count: ${i}`);
}

//Array iteration 
let colors = ["red","green","blue"];
colors.forEach(color => {
    console.log(color);
});