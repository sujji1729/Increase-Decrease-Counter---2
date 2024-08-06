
let counterValue = document.getElementById("counterValue");



function decrease() {

    let previousValue = counterValue.textContent;
    let updateValue = parseInt(previousValue) - 1;
    counterValue.textContent = updateValue;

    if (updateValue < 0) {
        counterValue.style.color = "red";
    }
    else if (updateValue > 0){
        counterValue.style.color = "green";

    }
    else{
        counterValue.style.color = "black";
    }


}

function reset() {

    let counter = 0;
    counterValue.textContent = counter;

    counterValue.style.color = "black";

}

function increase() {

    let previousValue = counterValue.textContent;
    let updateValue = parseInt(previousValue) + 1;
    counterValue.textContent = updateValue;

    if (updateValue > 0) {
        counterValue.style.color = "green";
    }
    else if (updateValue < 0){
        counterValue.style.color = "red";

    }
    else{
        counterValue.style.color = "black";
    }

}