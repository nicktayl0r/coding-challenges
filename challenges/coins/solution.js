function coins(cents) {
    
    total = 0;
    
    while (cents > 0) {
        if (cents >= 25) {
            cents -= 25;
            total++;
        } else if (cents >= 10) {
            cents -= 10;
            total++;
        } else if (cents >= 5) {
            cents -= 5;
            total++;
        } else {
            cents -= 1;
            total++;
        }
    }
    
    return total;
}