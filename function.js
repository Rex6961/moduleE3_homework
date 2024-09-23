// 1. Example E3.2:

const arr = [1, 2, 2, 3, 0, 'Hello', NaN];
            function validateType(arr) {
                for (let i = 0; i < arr.length; i++) {
                    if (!isNaN(arr[i]) && typeof arr[i] == 'number') {
                        if (arr[i]==0) {
                            console.log(`This is zerro ${arr[i]}`);
                        } if (arr[i]!=0 && arr[i]%2!=0) {
                            console.log(`This is odd ${arr[i]}`);
                        } if (arr[i]!=0 && arr[i]%2==0) {
                            console.log(`This is even ${arr[i]}`);
                        }
                    } else {
                        console.log(`Element is other type.`)
                    }
                }
            }
            validateType(arr);


// 2. Example E3.4:

let num = 4;
function primeNumber(num) {
    if (num > 1000) {
        return `Data not correct.`;
    } if (num == 0 || num == 1) {
        return `This number is not prime ${num}`;
    }
    for (let i = 2; i < num; i++) {
        if (num%i==0) {
            return `This number is not prime ${num}`;
        }
    }
            return `This is prime ${num}`;
}

console.log(primeNumber(num));


// 3. Example E3.5:

function mainFunc(func, num1) {
    let num2 = func(val);
        return function() {
            return num1 + num2;
        }
    }

function func(num) {
    return num;
}

let val = 4;
let result = mainFunc(func, 3);
console.log(result(val));


// 4. Example E3.7:

let intervalCounter = function (num1, num2) {
    setInterval(function() {
        if (num1 <= num2) {
            console.log(num1++);
        }
        clearInterval(intervalCounter);
    }, 1000);
}

intervalCounter(3, 10);


// 5. Example E3.8:

let pow = (x, n) => {
    let result = Math.pow(x, n);
    return result;
}

console.log(pow(3, 4));