//get error
function getError(value) {
    const numberError = document.getElementById('number-error');
    const stringError = document.getElementById('string-error');
    if (value < 0) {
        stringError.style.display = 'none'
        return numberError.style.display = 'block'
    }
    else if (isNaN(value)) {
        numberError.style.display = 'none'
        return stringError.style.display = 'block'

    }
}
// get cost input 
function getInput(str) {
    const ExpensesInputText = document.getElementById(str);
    const ExpensesInput = Number(ExpensesInputText.value);
    getError(ExpensesInput)

    return ExpensesInput;


}

document.getElementById('calculate-btn').addEventListener('click', function () {

    const firstExpensesInput = getInput('first-expenses-input');
    const secondExpensesInput = getInput('second-expenses-input');
    const thirdExpensesInput = getInput('third-expenses-input');



    const totalCostText = firstExpensesInput + secondExpensesInput + thirdExpensesInput;
    const totalCost = Number(totalCostText)


    // get total Expenses 
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = totalCost;


    //  get balance 
    const incomeText = document.getElementById('income-input');
    const income = Number(incomeText.value);
    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = income - totalCost;

    if (income < totalCost) {
        const totalExpenceError = document.getElementById('total-expences-error');
        totalExpenceError.style.display = 'block'
    }


});


document.getElementById('save-btn').addEventListener('click', function () {
    const incomeText = document.getElementById('income-input');
    const income = Number(incomeText.value);
    const saveInputText = document.getElementById('save-input');
    const saveInput = Number(saveInputText.value);
    const savingMony = income * saveInput / 100;

    const savingAmount = document.getElementById('saving-mony');
    savingAmount.innerText = savingMony;

    const remainingBalance = document.getElementById('remaning');
    const totalBalance = document.getElementById('total-balance').innerText;
    if (totalBalance < savingMony) {
        const savingError = document.getElementById('saving-error');
        savingError.style.display = 'block'
    }
    remainingBalance.innerText = totalBalance - savingMony;



})


