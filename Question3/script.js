
// question 3.1 to generate random number 
const randomNo = document.getElementById("randomNo")

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleGenerateNo() {
    const randomNum = getRandomInteger(1, 100);
    randomNo.innerText = randomNum;
}

// question 3.3. to check email valid or not 



function handleEmailCheck() {
    const email = document.getElementById("email").value
    if (email == "") {
        alert("Please Enter Email..")
        return true
    }
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    pattern.test(email) ? alert("Email is valid... ") : alert("Invalid email...")
}

// question 3.4 

function calculate(n) {
    const result = document.getElementById("result2")
    const input = document.getElementById("input").value
    if (input == "") {
        result.value = "Pleas Enter Number.."
        result.style.color = "red";
        return;
    } else {
        result.style.color = null;
    }
    if (n == 1) {
        result.value = "Square is:- " + input * input;
    } else if (n == 2) {
        result.value = "SquareRoot is:- " + Math.sqrt(input)
    } else {
        f = 1
        for (var i = input; i >= 1; i--) {
            f *= i;
        }
        result.value = "Factorial :- " + f;
    }

}

let hr = 0;
let mi = 0;
let se = 0;
let ms = 0;

let timer;


function startTimer() {
    timer = setInterval(() => {

        se++
        if (se == 59) {
            se = 0
            mi++
            if (mi == 59) {
                mi = 0
                hr++
            }
        }




        document.getElementById("showTime1").innerText = "H: " + hr;
        document.getElementById("showTime2").innerText = "M: " + mi;
        document.getElementById("showTime3").innerText = "S: " + se;
        document.getElementById("showTime4").innerText = ms;
    }, 1000);
}

function stopTimer() {
    window.clearInterval(timer);
}

function resetTimer() {
    hr = 0;
    mi = 0;
    se = 0;

    ms = 0;
    document.getElementById("showTime1").innerText = "H: " + hr;
    document.getElementById("showTime2").innerText = "M: " + mi;
    document.getElementById("showTime3").innerText = "S: " + se;
    document.getElementById("showTime4").innerText = ms;
}

let main = document.getElementById("mainImage");
let gallery = document.getElementById("gallery");
function showImage(element) {
    console.log(gallery)
    gallery.classList.add("d-none")
    main.src = element.src;
    main.classList.remove("d-none");

}
function closeImage() {
    gallery.classList.remove("d-none")
    main.classList.add("d-none");
}