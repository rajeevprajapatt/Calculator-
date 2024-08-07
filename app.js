// targeting all the number buttons
let numbers = document.querySelectorAll(".items");

// targeting the display where output will shown 
let display = document.querySelector("#text");

// targeting = button to evaluate expression
let exx = document.querySelector("#exx");

// targeting the clear button to clear all the display values
let AC_btn = document.querySelector(".AC_btn");

// targeting the delete button to delete the input numbers 
let delButton = document.querySelector("#delete_button");

// creating an array where input values are stored
let arr = [];

const calculate = (expp) => {
    let ans = eval(expp);
    return ans;
}

// creating a function for delete button to delete input numbers
delButton.addEventListener('click', () => {
    arr.pop();
    display.innerText = arr.join("");
})

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        console.log(number.value)
        let x = number.value;
        arr.push(x);

        let expp = arr.join("");
        display.innerText = arr.join("");

        let result = calculate(expp);

        exx.addEventListener("click", () => {
            display.innerText = `${result}`;
            arr.length = 0;
        })
        if (arr.length > 13) {
            display.innerText = "Out of range";
            arr.length = 0;
        }
    })
})

AC_btn.addEventListener("click", () => {
    display.innerText = "";
    arr.length = 0;
})


