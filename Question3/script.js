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
    const email  = document.getElementById("email").value
    if(email== ""){
        alert("Please Enter Email..")
        return true
    }
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    pattern.test(email) ? alert("Email is valid... ") : alert("Invalid email...")
}