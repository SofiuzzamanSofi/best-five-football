
// common function for purches from the id 
function tagStringToNumber(input) {
    const elementt = document.getElementById(input);
    const elementtString = elementt.innerText
    const elementtStringToNumber = parseFloat(elementtString);
    return elementtStringToNumber;
}

// text jog biyog sheshe gaiga mot rakha 
function textInputt(oldInputt, newInputt) {
    const oldInputttt = document.getElementById(oldInputt);
    oldInputttt.innerText = newInputt
}

function totalCosts() {
    const playerExpensesCost = tagStringToNumber('player-expenses')
    const managerExpensesCost = tagStringToNumber('manager-expenses')
    const coachExpensesCost = tagStringToNumber('coach-expenses')

    const totalCost = playerExpensesCost + managerExpensesCost + coachExpensesCost;

    textInputt('total-player-expenses', totalCost)
}

const calculate = document.getElementById('calculate');
calculate.addEventListener('click', function () {

    const playerNumber = tagStringToNumber('player-select')

    const playerExpensess = 1000 * playerNumber;

    textInputt('player-expenses', playerExpensess)

    // totalCosts()

})

const totalll = document.getElementById('total');
totalll.addEventListener('click', function () {
    totalCosts()

})