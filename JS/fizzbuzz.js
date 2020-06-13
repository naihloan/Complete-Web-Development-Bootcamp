alert("hi!"); 

var output = [];
var count = 1;

function fizzBuzz() {
    output.push(count);
    count++;

    if (count % 3 === 0) {
        output = "Fizz";
    } 
    
    if (count % 5 === 0) {
        output = "Buzz";
    }

    if (count % 3 === 0 && count % 5 === 0) {
        output = "FizzBuzz";
    }

    console.log(output);
    alert(output);
}

// fizzBuzz();