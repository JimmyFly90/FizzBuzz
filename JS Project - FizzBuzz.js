let number = 1;

let answer = "";

for (let i = 1; i < 101; i++) {
    answer += number++;
    if (i % 15 == 0) {
        console.log("BuzzFizz")
    }
    else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    }
    else {
        console.log(i);
    } 
} 