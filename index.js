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
        if (e[i]>0 && e[i] === e[i-1]) {
            result.push(e[i]);
        } else{
            result.push(e[i]*2);
        }
    }
    return result;
}

const arr = [1,2,3,4,4,5];
// console.log(Doubles(arr));

// 3. The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function MirrorMirror(e) {
    const reverse = e.split("").reverse().join("");
    return e+reverse;
}

// console.log(MirrorMirror("Prat"));

// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function ValidatePassword(password) {
    const length = password.length>=8;
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