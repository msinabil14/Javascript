function hi(marks) {
    let highest = marks[0];

    for (let i = 1; i < marks.length; i++) {
        if (marks[i] > highest) {
            highest = marks[i];
        }
    }

    console.log(highest); 
}

let num = [10,20,30,40,50];
hi(num); 