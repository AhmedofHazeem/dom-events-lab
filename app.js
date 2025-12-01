/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

// we get the references and add them to a variable

const calculations = document.querySelector('#calculator') //the div id called calculator
const displaying = document.querySelector('.display')

let currentInput = ''
let previousInput = ''
let operator = null

// As done in the exercise during class, we need a function that updates the display of 
// calculator when doing operations. 

function updateDisplay(value) {
    displaying.textContent = value
}

// Instructions: as a user I want to be able to clear out all operations 
// and start from 0 

function clearCalculator() {
    currentInput = ''
    previousInput = ''
    operator = null
    updateDisplay('0') //Clears the calculator from all the current and previous input
    // then sets (updates) the display to zero, via the user stories. 
}

function doCalculate() {
    const num1 = Number(currentInput)
    const num2 = Number(previousInput)


    if (num1 === isNaN || num2 === isNaN){ //condition for if num1 and num2 are NaN (Not a Number)
        return
    }

    let result //assigning result as a variable to store the operations result in

    if (operator === '+' ){
        result = num1 + num2
    } else if (operator === '-') {
        result = num2 - num1 //at first I got negative values, for example if I did 99-3 I'd get -96. I had to do num2 - num1 instead of num1-num2 (which I had in the beginning)
    } else if (operator === '*'){
        result = num1 * num2
    } else if (operator === '/') {
        if (num2 === 0) {
            result = 'Error' //cannot divide by 0
        } else {
            result = num2/num1
        }
    }
    currentInput = result.toString()
    operator = null
    previousInput = ''
    updateDisplay(currentInput)
}


// Main event handling

calculations.addEventListener('click', (event) => {
    const target = event.target

    if (!target.classList.contains('button')) {
        return
    }

    const value = target.textContent

    if (value === 'C') {
        clearCalculator()
        return
    }

    if (value === '=') {
        doCalculate()
        return
    }

    if (target.classList.contains('operator')) {
        if (currentInput === ''){
            return
        }
        if (previousInput !== '') {
            doCalculate()
        }

        operator = value
        previousInput = currentInput
        currentInput = ''
        return
    }

    if (target.classList.contains('number')) {
        currentInput += value
        updateDisplay(currentInput)
    }
})


