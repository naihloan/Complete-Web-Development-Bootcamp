function isLeap(Year){
    // var kindOfYear;
    prompt("enter a year! now!");
    if (Year / 400){
        alert("The year " + Year + " is Leap.")
    } else if (Year / 100) {
        alert("The year " + Year + " is NOT Leap.")
    } else if (Year / 4) {
        alert("The year " + Year + " is Leap.")
    } else {
        alert("The year " + Year + " is NOT Leap.")
    }
}
