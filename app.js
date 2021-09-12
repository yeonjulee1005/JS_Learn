
const calculator = {
    add: function(num1,num2) {
        return num1 + num2;
    },
    minus: function(num1,num2) {
        return num1 - num2;
    },
    multi: function(num1,num2) {
        return num1 * num2;
    },
    devide: function(num1,num2) {
        return num1 / num2;
    },
    powerof: function(num1,num2) {
        return num1 ** num2;
    }
}



const plusResult = calculator.add(2,44);
const minusResult = calculator.minus(2,44);
const muntiResult = calculator.multi(3,plusResult);
const devideResult = calculator.devide(muntiResult, 44);
const powerOfResult = calculator.powerof(plusResult, devideResult);