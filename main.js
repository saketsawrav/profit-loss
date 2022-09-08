var initialPrice = document.querySelector('#initial-price');
var quantityStocks = document.querySelector('#quantity-stocks');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

function calculateProfitAndLoss (initial, quantity, current) {
    if (initial > current) {
        var profit = (initial - current) * quantity;
        var profitPercentage = (profit/current) * 100;
        console.log('Yay! you made a profit of ' + profit + ' in your investment with a profit percentage of ' + profitPercentage + '%');
    } else if (current > initial) {
        var loss = (current - initial) * quantity;
        var lossPercentage = (loss/current) * 100;
        console.log('Oh no! you made a loss of ' + loss + ' in your investment with a loss percentage of ' + lossPercentage + '%');  
    } else {
        console.log('Seems like you still have what you invested.')
    }
}

calculateProfitAndLoss(100, 10, 1000);