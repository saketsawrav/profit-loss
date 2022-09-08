var initialPrice = document.querySelector('#initial-price');
var quantityStocks = document.querySelector('#quantity-stocks');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

submitBtn.addEventListener('click', submitHandler);

function submitHandler() {
    var initialP = Number(initialPrice.value);
    var quantitySt = Number(quantityStocks.value);
    var currPrice = Number(currentPrice.value);
    if (initialP === 0 || quantitySt === 0 || currPrice === 0) {
        displayOutput('errorMsg', "The input field cannot be empty, enter value to proceed")
    } else {
        calculateProfitAndLoss(initialP, quantitySt, currPrice);
    }
}

function calculateProfitAndLoss (initial, quantity, current) {
    if (initial > current) {
        var profit = (initial - current) * quantity;
        var profitPercentage = (profit/current) * 100;
        displayOutput('profit', 'Yay! you made a profit of ' + profit + ' in your investment with a profit percentage of ' + Number.parseFloat(profitPercentage).toFixed(2) + '%'); // make sure to parse the percentage to just 2 digits
    } else if (current > initial) {
        var loss = (current - initial) * quantity;
        var lossPercentage = (loss/current) * 100;
        displayOutput('loss', 'Oh no! you made a loss of ' + loss + ' in your investment with a loss percentage of ' + Number.parseFloat(lossPercentage).toFixed(2) + '%');  // make sure to parse the percentage to just 2 digits
    } else {
        displayOutput('Seems like you still have what you invested.');
    }
}

function displayOutput(status, message) {
    switch (status) {
        case "errorMsg":
            outputBox.style.color = 'red';
            break;
        case "profit":
            outputBox.style.color = "green";
            break;
        case "loss":
            outputBox.style.color = "red";
            break;
        default:
            break;
    }
    outputBox.innerHTML = message;
}