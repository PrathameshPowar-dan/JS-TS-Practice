// 1. The Magical Sorting Hat
function sortStudent(students: string[]): void {
    const houses: string[] = [
        "Gryffindor",
        "Hufflepuff",
        "Ravenclaw",
        "Slytherin",
    ];

    for (const name of students) {
        if (name.length < 6) {
            console.log(`${name} - ${houses[0]}`);
        } else if (name.length < 8) {
            console.log(`${name} - ${houses[1]}`);
        } else if (name.length < 12) {
            console.log(`${name} - ${houses[2]}`);
        } else {
            console.log(`${name} - ${houses[3]}`);
        }
    }
}

// 2. The Double Trouble
function doubles(arr: number[]): number[] {
    const result: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            result.push(arr[i]);
        } else {
            result.push(arr[i] * 2);
        }
    }

    return result;
}

// 3. The Mirror Mirror
function mirrorMirror(value: string): string {
    const reversed = value.split("").reverse().join("");
    return value + reversed;
}

// 4. The Password Validator
function validatePassword(password: string): string {
    const isLongEnough: boolean = password.length >= 8;
    const hasUpper: boolean = /[A-Z]/.test(password);
    const hasLower: boolean = /[a-z]/.test(password);
    const hasDigit: boolean = /[0-9]/.test(password);

    if (isLongEnough && hasUpper && hasLower && hasDigit) {
        return "Password is Valid";
    }

    return "Password Invalid";
}

// 5. The Sum Selector
function sumUntilNegative(arr: number[]): number {
    let sum = 0;

    for (const num of arr) {
        if (num < 0) break;
        sum += num;
    }

    return sum;
}

// 6. The Vowel Counter
function countVowels(value: string): number {
    const vowels: string[] = ["a", "e", "i", "o", "u"];
    let count = 0;

    for (const char of value.toLowerCase()) {
        if (vowels.indexOf(char) !== -1) {
            count++;
        }
    }

    return count;
}

// 7. The Local Storage Manager
function SaveNoteToLocalStorage<T>(note: T): void {
    localStorage.setItem("Note", JSON.stringify(note));
}

// 8. Async Array Mapping
// async function mapping(arr: number[]): Promise<number[]> {
//     const promises: Promise<number>[] = arr.map((num) => {
//         return new Promise<number>((resolve) => {
//             setTimeout(() => {
//                 resolve(num * 2);
//             }, 500);
//         });
//     });

//     return Promise.all(promises);
// }

// 9. The Asynchronous Shopper
// async function PlaceOrder(): Promise<string> {
//     const delay = Math.random() * 10000;

//     return new Promise<string>((resolve, reject) => {
//         setTimeout(() => {
//             const success = Math.random() > 0.5;

//             if (success) {
//                 resolve("Order Placed");
//             } else {
//                 reject("Order Not Placed");
//             }
//         }, delay);
//     });
// }

// 10. The Coffee Machine
// async function BrewCoffee(type: string): Promise<string> {
//     return new Promise<string>((resolve) => {
//         setTimeout(() => {
//             resolve(`${type} is ready`);
//         }, Math.random() * 10000);
//     });
// }

// 11. The Array Filterer
interface Product {
    name: string;
    productName: string;
}

function FilterProducts(products: Product[], query: string): Product[] {
    return products.filter(
        (product) =>
            product.productName.toLowerCase() === query.toLowerCase()
    );
}

// 12. The Token Manager
interface AuthToken {
    token: string;
    expiry: number;
}

function SetAuthToken(token: string): AuthToken {
    const expiryTime = Date.now() + 10000;

    const data: AuthToken = {
        token,
        expiry: expiryTime,
    };

    localStorage.setItem("AuthToken", JSON.stringify(data));

    return data;
}

// 13. The Shopping Cart Totalizer
interface CartItem {
    name: string;
    price: number;
    quantity: number;
}

function CalculateTotal(items: CartItem[]): number {
    let total = 0;

    for (const item of items) {
        total += item.price * item.quantity;
    }

    return total;
}

// 14. The Window Scroller
function SmoothScrollToTop(): void {
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

function fizzBuzz(): void {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// fizzBuzz();