// function to check service quality
function checkQuality(quality) {
    if (quality === "great" || quality === "ok" || quality === "poor") {
        return true;
    } else {
        return false;
    }
}
// function to check service amount
function checkAmount(amount) {
    if (amount >= 5 && amount <= 500) {
        return true;
    } else {
        return false;
    }
}
// function to calculate tip
function getTip(amount, quality) {

    let tip = 0;

    if (quality === "great") {
        tip = amount * 0.20;
    }
    else if (quality === "ok") {
        tip = amount * 0.15;
    }
    else if (quality === "poor") {
        tip = amount * 0.10;
    }

    return tip;
}
// function that runs the program
function startTip() {

    let serviceAmount = parseFloat(prompt("Enter the service amount between $5 and $500"));
    let serviceQuality = prompt("Enter the service quality (great, ok, or poor)");

    if (!checkAmount(serviceAmount)) {
        alert("Invalid service amount. Please enter a value between $5 and $500.");
        return;
    }

    if (!checkQuality(serviceQuality)) {
        alert("Invalid service quality. Please enter great, ok, or poor.");
        return;
    }

    let tipAmount = getTip(serviceAmount, serviceQuality);

    alert(
        "Service Amount: $" + serviceAmount +
        "\nService Quality: " + serviceQuality +
        "\nRecommended Tip: $" + tipAmount.toFixed(2)
    );
}