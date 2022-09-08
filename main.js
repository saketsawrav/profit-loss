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
        displayOutput("The input field cannot be empty, enter value to proceed")
    } else {
        calculateProfitAndLoss(initialP, quantitySt, currPrice);
    }
}

function calculateProfitAndLoss (initial, quantity, current) {
    if (initial > current) {
        var profit = (initial - current) * quantity;
        var profitPercentage = (profit/current) * 100;
        displayOutput('Yay! you made a profit of ' + profit + ' in your investment with a profit percentage of ' + profitPercentage + '%');
    } else if (current > initial) {
        var loss = (current - initial) * quantity;
        var lossPercentage = (loss/current) * 100;
        displayOutput('Oh no! you made a loss of ' + loss + ' in your investment with a loss percentage of ' + lossPercentage + '%');  
    } else {
        displayOutput('Seems like you still have what you invested.');
    }
}

function displayOutput(message) {
    outputBox.innerHTML = message;
}