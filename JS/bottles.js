function drinkingBottles(){

    var bottles = 99;

    while (bottles > 1) {
        document.writeln(bottles + " bottles of tang on the wall, " + bottles + " bottles of tang.<br>" );
        document.writeln("Take one down and pass it around, " + (bottles--) + " bottles of tang on the wall.<br><br>");
        // bottles = bottles--;
    }

    if (bottles === 1) {
        document.writeln(bottles + " bottle of tang on the wall, " + bottles + " bottle of tang.<br>");
        bottles = bottles--;
        document.writeln("Take one down and pass it around, no more bottles of tang on the wall.<br>");
        document.writeln("Go to the store and buy some more, 99 bottles of tang on the wall.");
    }
        
    document.writeln(i + " " + icase + " of beer on the wall,");

}

drinkingBottles();