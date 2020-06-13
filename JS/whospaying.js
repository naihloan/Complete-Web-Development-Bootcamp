var friends = ["Luigi", "Peponov", "Agu", "Rafa", "Benja", "Fede"];

function whosPaying(friends) {

    var numberOfPeople = friends.length;
    var randomPersonPosition = (Math.floor(Math.random() * numberOfPeople);
    var randomPerson = friends[randomPersonPosition];

    return randomPerson + " is buying lunch!";

}