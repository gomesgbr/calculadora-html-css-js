let monitor = document.querySelector('.monitor')
let operation = []
let operators = ['*', '+', '/', '-']

function run() {
    listenClicks()
}

function listenClicks() {
    let buttons = document.querySelectorAll('.table td');

    buttons.forEach((btn, index) => {
        btn.addEventListener('click', e => {
            let className = btn.className

            switch (className) {
                case "zero":
                    concatOperation(0)
                    break
                case "one":
                    concatOperation(1)
                    break
                case "two":
                    concatOperation(2)
                    break
                case "three":
                    concatOperation(3)
                    break
                case "four":
                    concatOperation(4)
                    break
                case "five":
                    concatOperation(5)
                    break
                case "six":
                    concatOperation(6)
                    break
                case "seven":
                    concatOperation(7)
                    break
                case "eight":
                    concatOperation(8)
                    break
                case "nine":
                    concatOperation(9)
                    break
                case "plus":
                    concatOperation("+")
                    break
                case "minus":
                    concatOperation("-")
                    break
                case "times":
                    concatOperation("*")
                    break
                case "division":
                    concatOperation("/")
                    break
                case "dot":
                    concatOperation(".")
                    break
                case "equals":
                    calculo()
                    break
                case "clear":
                    clear()
                    break
            }
        })

    })
}


/** 
 * Esse metodo tem como objetivo transformar a expressão em um array, 
 * separando numeros dos operadores
 */
function concatOperation(value) {
 
   
    if (isNaN(getLastIndex())) {

        if (isNaN(value)) {

            if (validOperator(value)) {

                
                if (validOperator(getLastIndex())) {
                    changeOperator(value)
                } else {
                    setOperator(value)
                }
            } else {
                concatNumber(value)
            }
        } else {
            concatNumber(value)
        }
    } else {

        if (isNaN(value)) {

            if (validOperator(value)) {
                if (validOperator(getLastIndex())) {

                    changeOperator(value)
                } else {
                    setOperator(value)

                }
            } else {

                concatNumber(value)
            }
        } else {

            concatNumber(value)
        }
    }

    console.log(operation)

    monitor.innerHTML = operation.join("")
}

function setOperator(value) {
    operation.push(value)
}



/**
 * Esse metodo tem como objetivo concatenar o numero e inseri-lo na ultima posição
 */
function concatNumber(value) {
    if (getLastIndex() === undefined) {
        operation.push(value)
    } else {
        if (validOperator(getLastIndex())) {
            operation.push(value)
        } else {
            let num = getLastIndex() + value.toString()
            operation[operation.length - 1] = num
        }

    }

}



//Esse metodo tem como objetivo trocar o operador caso o ultimo indice e o atual valor dado pelo usuario sejam operadores
function changeOperator(value) {
    operation[operation.length - 1] = value
}

function getLastIndex() {
    return operation[operation.length - 1]
}


function validOperator(value) {
    if (operators.indexOf(value) === -1) {
        return false
    } else {
        return true
    }
}

function calculo() {

    let resulado = (eval(`${operation.join('')}`))

    monitor.innerHTML = resulado
    operation = [resulado]
}

function clear() {

    operation = []
    monitor.innerHTML = '0'

}

run()