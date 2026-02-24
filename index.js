// 1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

function SortSstudent(e) {
    const house = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

    for (let i = 0; i < e.length; i++) {
        if (e[i].length < 6) {
            console.log(e[i] + "-" + house[0]);
        } else if (e[i].length < 8) {
            console.log(e[i] + "-" + house[1]);
        } else if (e[i].length < 12) {
            console.log(e[i] + "-" + house[2]);
        } else {
            console.log(e[i] + "-" + house[3]);
            break;
        }
    }

}

const students = ["Dan", "SAMMYity", "Ravenloty", "HarryPo"]
// SortSstudent(students);


// 2. The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function Doubles(e) {
    const result = []
    for (let i = 0; i < e.length; i++) {
        if (e[i] > 0 && e[i] === e[i - 1]) {
            result.push(e[i]);
        } else {
            result.push(e[i] * 2);
        }
    }
    return result;
}

const arr = [1, 2, 3, 4, 4, 5];
// console.log(Doubles(arr));

// 3. The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function MirrorMirror(e) {
    const reverse = e.split("").reverse().join("");
    return e + reverse;
}

// console.log(MirrorMirror("Prat"));

// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function ValidatePassword(password) {
    const length = password.length >= 8;
    const UpperCase = /[A-Z]/.test(password);
    const LowerCase = /[a-z]/.test(password);
    const Number = /[0-9]/.test(password);

    if (length && UpperCase && LowerCase && Number) {
        return "Password is Valid"
    } else {
        return "Password Invalid"
    }
};

// console.log(ValidatePassword("1234Abcdd"));

// 5. The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function Sum(e) {
    let sum = 0
    for (let i = 0; i < e.length; i++) {
        if (e[i] < 0) {
            break;
        } else {
            sum += e[i];
        }
    }

    return sum;
}

// const ar = [2, 4, -4, -2, 5]
// console.log(Sum(ar));


// 6. The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function Vowels(e) {
    // normalize input to lowercase so both cases are counted
    const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    let count = 0;

    for (let i = 0; i < e.length; i++) {
        if (vowels.includes(e[i])) {
            count++;
        }
    }

    return count;
}

const str = "Prathamesh";
// console.log(Vowels(str));

// 7. The Local Storage Manager:
//     You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

function saveNoteToLocalStorage(e) {
    localStorage.setItem("Npte", JSON.stringify(e))
}

const lsm = "Day";
// saveNoteToLocalStorage(lsm);

// 8. Async Array Mapping:
//    Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

async function Mapping(e) {
    const promises = e.map(arr => {
        return new Promise(resolve =>
            setTimeout(() => {
                resolve(arr * 2)
            }, 500)
        )
    })

    return Promise.all(promises);
}

const ar = [2, 4, -4, -2, 5]
// Mapping(ar).then(result => console.log(result));

// 9. The Asynchronous Shopper:
//    Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

async function placeOrder() {
    const random = Math.random();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Order Placed")
            } else {
                reject("Order Not Placed")
            }
        }, random * 10000);
    })
}

// placeOrder().then((message)=>{
//     console.log("Successfully",message)
// }).catch(e=>{
//     console.log("Unsuccess",e)
// })

// 10. The Coffee Machine:
//     In your coffee shop application, you need to simulate the process of brewing coffee asynchronously.Write an async function named brewCoffee that takes the type of coffee and returns a promise.The promise should resolve with a message indicating that the coffee is ready after a random delay.

async function brewCoffee(e) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`${e} is ready`)
        },Math.random()*10000)
    })
}

brewCoffee("espresso").then(mess=>{
    console.log(mess)
});