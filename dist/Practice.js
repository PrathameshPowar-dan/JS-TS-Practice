"use strict";
// 1. The Magical Sorting Hat
function sortStudent(students) {
    var houses = [
        "Gryffindor",
        "Hufflepuff",
        "Ravenclaw",
        "Slytherin",
    ];
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var name_1 = students_1[_i];
        if (name_1.length < 6) {
            console.log("".concat(name_1, " - ").concat(houses[0]));
        }
        else if (name_1.length < 8) {
            console.log("".concat(name_1, " - ").concat(houses[1]));
        }
        else if (name_1.length < 12) {
            console.log("".concat(name_1, " - ").concat(houses[2]));
        }
        else {
            console.log("".concat(name_1, " - ").concat(houses[3]));
        }
    }
}
// 2. The Double Trouble
function doubles(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            result.push(arr[i]);
        }
        else {
            result.push(arr[i] * 2);
        }
    }
    return result;
}
// 3. The Mirror Mirror
function mirrorMirror(value) {
    var reversed = value.split("").reverse().join("");
    return value + reversed;
}
// 4. The Password Validator
function validatePassword(password) {
    var isLongEnough = password.length >= 8;
    var hasUpper = /[A-Z]/.test(password);
    var hasLower = /[a-z]/.test(password);
    var hasDigit = /[0-9]/.test(password);
    if (isLongEnough && hasUpper && hasLower && hasDigit) {
        return "Password is Valid";
    }
    return "Password Invalid";
}
// 5. The Sum Selector
function sumUntilNegative(arr) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (num < 0)
            break;
        sum += num;
    }
    return sum;
}
// 6. The Vowel Counter
function countVowels(value) {
    var vowels = ["a", "e", "i", "o", "u"];
    var count = 0;
    for (var _i = 0, _a = value.toLowerCase(); _i < _a.length; _i++) {
        var char = _a[_i];
        if (vowels.indexOf(char) !== -1) {
            count++;
        }
    }
    return count;
}
// 7. The Local Storage Manager
function SaveNoteToLocalStorage(note) {
    localStorage.setItem("Note", JSON.stringify(note));
}
function FilterProducts(products, query) {
    return products.filter(function (product) {
        return product.productName.toLowerCase() === query.toLowerCase();
    });
}
function SetAuthToken(token) {
    var expiryTime = Date.now() + 10000;
    var data = {
        token: token,
        expiry: expiryTime,
    };
    localStorage.setItem("AuthToken", JSON.stringify(data));
    return data;
}
function CalculateTotal(items) {
    var total = 0;
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        total += item.price * item.quantity;
    }
    return total;
}
// 14. The Window Scroller
function SmoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
// 15. Even and Unique Numbers
// function getEvenUnique(arr: number[]): number[] {
//     return [...new Set(arr.filter((num) => num % 2 === 0))];
// }
// 15. Write a Program that prints the numbers from 1 to 100. but for multiples of 3 print "Fizz" instead  of the number and for the multiples of 5 print "Buzz". For Numbers which are multiples of both 3 and 5 print "FizzBuzz"
function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz();
