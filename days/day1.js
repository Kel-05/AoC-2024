function day1() {

    // ------- GET AND SORT INPUT -------
    
    let input = document.getElementById("consoleInput").value;

    if(input.trim() == "") {
	const xhttp = new XMLHttpRequest();
	xhttp.open("GET", "days/day1-input.txt", false);
	xhttp.send();

	input = xhttp.responseText;
    }

    input = input.split("\n");

    list1 = [];
    list2 = [];

    for (let i in input) {
	let line = input[i].split("   ");

	let x = Number(line[0]);
	let y = Number(line[1]);
	
	list1.push(x);
	list2.push(y);
    }

    list1.sort((a, b) => a - b);
    list2.sort((a, b) => a - b);

    // ------- PART 1 -------

    let sum = 0;
    
    for (let i = 0; i < list1.length; i++) {
	sum += Math.abs(list1[i] - list2[i]);
    }

    console.log("[Part 1] The result is: " + sum);

    // ------- PART 2 -------

    sum = 0;

    for (let i = 0; i < list1.length; i++) {
	let counter = 0;
	
	for (let j = 0; j < list2.length; j++) {
	    
	    if (list1[i] == list2[j]) {
		counter++;
	    }
	    
	}
	
	sum += list1[i] * counter;
    }

    console.log("[Part 2] The result is: " + sum);
}
