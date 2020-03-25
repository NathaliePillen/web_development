var names = ["Angela", "Ben", "Michael", "Jurgen", "Cloe"];

function whosPaying(names) {
        var numberOfPeople = names.length;
        var randomPeoplePosition = Math.floor(Math.random() * numberOfPeople);
        var randomPeople = names[randomPeoplePosition];
        return (randomPeople + " is buying lunch!");
    }
    
whosPaying(names);