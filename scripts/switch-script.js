let current = 1;
let dayFunction = ["try{day", current, "();}catch(err){console.error(err);}"];

const days = new Array(26).fill(0);
const numberDisplay = document.getElementById('numberDisplay');

function stoint(input) {
    x = Number(input);

    if (isNaN(x) || x < 1 || x > 25) {
	return 1;
    }

    return x;
}

function previous() {
    current = stoint(numberDisplay.value);
    current--;
    
    if (current < 1) {
	current = 25;
    }

    numberDisplay.value = current;
}

function next() {
    current = stoint(numberDisplay.value);
    current++;
    
    if (current > 25) {
	current = 1;
    }

    numberDisplay.value = current;
}

function exec() {
    current = stoint(numberDisplay.value);
    dayFunction[1] = current;

    let script = new Function(dayFunction.join(''));
    
    if (!days[current]) {
	loadScript("days/day" + current + ".js", script);
	days[current] = 1;
    }
    else {
	script();
    }
    
}

function handleSubmit(e) {
    e.preventDefault();
    exec();
}

document.getElementById("myForm").addEventListener("submit", handleSubmit);
