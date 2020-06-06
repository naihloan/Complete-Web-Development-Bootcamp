function test() {
    var a = "3"; // sand
    var b = "8"; // water

    var c = "0";
        c = a;  // save sand
        a = b;  // place water        
        b = c;  // place sand

    console.log("a is: " + a);
    console.log("b is: " + b);
}
