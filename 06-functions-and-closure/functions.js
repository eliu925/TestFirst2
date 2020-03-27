/* eslint-disable no-unused-vars */
function concatString (arg){
    let args = Array.from(arguments);
    return args.join('')
}

function yourFunctionRunner(arg) {
    let args = Array.from(arguments);
    let returnedValues = ''
    for (let i = 0; i < args.length; i++){
        let returned = args[i]();
        returnedValues += returned;
    }

    return returnedValues;
}

function makeAdder (num){
    let sum = 0;
    return function returnValue(num2){
       return sum += num + num2;
    }
}

function once(func){
    let counter = 0;
    return function funcReturned(){
        if (counter > 0){
            return "the function has already been called..."
        }
        else {
            counter++;
            return func();
    }
}
}

function createObjectWithClosures(newNum){
    let value = 11;
    return obj = {
        oneIncrementer: function (){
            return value;
        },
        tensIncrementer: function (){
            return value;
        },
        getValue: function (){
            return value;
        },
        setValue: function (newNum){
            value = newNum;
        }
    }
}

function dontSpillTheBeans(newOMG){
let theSecret = 'I\'m proposing to my significant other this Friday';
    return secret = {
        getSecret: function (){
            return theSecret;
        },
        setSecret: function (newOMG){
            theSecret = newOMG
        }
    }
}