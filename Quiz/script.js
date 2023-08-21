const quiz = [
    {
        qus: "Q1: Javascript is a _____ language.",
        a: "Programming",
        b: "Application",
        c: "Scripting",
        d: "None of the above",
        ans: "c"

    },
    {
        qus: "Q2: JavaScript is a _____ Side Scripting Language.",
        a: "Sever",
        b: "Browser",
        c: "ISP",
        d: "None of the above",
        ans: "b",


    },
    {
        qus: "Q3: JavaScript can be written",
        a: "directly on the sever Script",
        b: "directly into html page",
        c: "all of the above",
        d: "None of the above",
        ans: "b"
    },
    {
        qus: "Q4: JavaScript code is written inside file having extension",
        a: ".jvs",
        b: ".js",
        c: ".jsc",
        d: ".javaScript",
        ans: "b"
    },
    {
        qus: "Q5: Which is correct about JavaScript??",
        a: "JavaScript is an Object-Based language",
        b: "JavaScript is Assembly-language",
        c: "JavaScript is an Object-Oriented language",
        d: "JavaScript is a High-level language",

        ans: "b"

    },
    {
        qus: "Q6: Which of the following is not an error in JavaScript?",
        a: "Missing of Bracket",
        b: "Division by zero",
        c: "Syntax error",
        d: "Missing of semicolons",
        ans: "b"

    },
    {
        qus: 'Q7: How do you write "Hello World" in an alert box?',
        a: 'msg("Hello World");',
        b: 'alert("Hello World");',
        c: 'alertBox("Hello World");',
        d: 'mdgBox("Hello World");',
        ans: "b"
    },
    {
        qus: "Q8: How do you create a function in JavaScript?",
        a: "function = myFunction()",
        b: "function myFunction()",
        c: "function:myFunction()",
        d: "None of the above",
        ans: "b"
    },
    {
        qus: 'Q9: How do you call a function named "myFunction"?',
        a: "myFunction()",
        b: "call myFunction",
        c: "call function myFunction",
        d: "None of the above",
        ans: "a"

    },
    {
        qus: "Q10: How to write an IF statement in JavaScript?",
        a: "if i == 5 then",
        b: "if i == 5",
        c: "if i = 5 then",
        d: "if(i==5)",
        ans: "d"

    },
    {
        qus: 'Q11: How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        a: "if i != 5 then",
        b: "if i <> 5",
        c: "if(i <> 5) ",
        d: "if(i != 5)",
        ans: "d"
    },
    {
        qus: "Q12:How does a FOR loop start?",
        a: "for(i; i<5; i++)",
        b: "for(i = 0; i<5; i++)",
        c: "for i = 1 to 5  ",
        d: "for(i = 0; i<5)",
        ans: "b"
    },
    {
        qus: "Q13: How can you add a comment in a JavaScript?",
        a: "<!--this is a comment-->",
        b: "//this is a comment",
        c: "'this is a comment",
        d: "None of the above",
        ans: "b"

    },
    {
        qus: "Q14: Which event occurs when the user clicks on an HTML element?",
        a: "onchaneg",
        b: "onmouseover",
        c: "onmouseclick",
        d: "onclick",
        ans: "d"

    },
    {
        qus: "Q15: How do you declare a JavaScript variable?",
        a: "var carName",
        b: "let carName",
        c: "const carName",
        d: "All of the above",
        ans: "d"
    }

]

const question = document.getElementById("question")
const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const option4 = document.getElementById("option4")
const submit = document.getElementById("Submit")
const uname = document.getElementById("name")
const startBtn = document.getElementById("startBtn")
const summary = document.getElementById("summary")
const start = document.getElementById("start")
let box = document.querySelector("#box")
const answers = document.querySelectorAll(".answer")

let questionCount = 0;
let score = 0;
let testRange = 5
let answerArray = []
function handleSelect() {
    var e = document.getElementById("selection");
    testRange = e.value;
}

startBtn.addEventListener("click", () => {
    box.classList.remove("hide")
    start.classList.add("hide")
})

const loadQuestion = () => {
    const quizList = quiz[questionCount]
    question.innerText = quizList.qus
    option1.innerText = quizList.a
    option2.innerText = quizList.b
    option3.innerText = quizList.c
    option4.innerText = quizList.d


    console.log(answerArray)
}



const getCheckedAnswer = () => {
    let answer = ""
    answers.forEach((element) => {
        if (element.checked) {
            answer = element.id

        }

    });

    return answer

}
console.log(answers)

const uncheckedAll = () => {
    answers.forEach(element => element.checked = false)
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckedAnswer()
    answerArray.push(checkedAnswer)
    if (!checkedAnswer) {
        alert("Please select answer")
        return
    }

    if (checkedAnswer === quiz[questionCount].ans) {
        score++
        loadQuestion()
    }
    uncheckedAll();
    questionCount++
    if (questionCount < testRange) {
        loadQuestion()
    } else {
        let setScore = document.querySelector(".result")

        box.classList.add("hide")
        const percentage = score * 100 / testRange
        setScore.classList.remove("hide")
        let url = ""
        if (percentage <= 25) {
            url = "./image/0.gif"
        } else if (percentage <= 50) {
            url = "./image/3.gif"
        } else if (percentage <= 75) {
            url = "./image/3.gif"
        } else if (percentage <= 100) {
            url = "./image/excellent.png"
        }
        setScore.innerHTML = ` 
        <h3><img id="img" src="${url}" alt=""></h3>
        <h4>Dear ${uname.value || "Guest"} You Scored ${score}/${testRange} and ${percentage}%</h4>
        <button onclick="btnReview()"> Review answer</button>
        <button onClick="location.reload()">Play again</button>
        `
        axios.post("https://quizapp-uhg8.onrender.com/addResult", { name: `${uname.value || "Guest"}`, score: `${score} out of ${testRange} and ${percentage}%` })

    }
   

})
for (let i = 0; i < 5; i++) { 
    var setAns = `
 
    <h5 id="question">${quiz[i].qus}</h5>
    <p  ><B>a: </B>${quiz[i].a}</p>
    <p  ><B>b: </B>${quiz[i].b}</p>
    <p  ><B>c: </B>${quiz[i].c}</p>
    <p  ><B>d: </B>${quiz[i].d}</p>
    <p><B>Answer: </B>${quiz[i].ans === answerArray[i] ? `${answerArray[i]} is true 1 point` : `<B>${answerArray[i]}</B> is false ,the right option is <B>${quiz[i].ans}</B> `}</p>
    <hr>
    `
    summary.innerHTML += setAns
        
}

const btnReview = () => {
    alert("ok")
    let setScore = document.querySelector(".result")
    let summaryBox = document.querySelector("#summary-box")
    summaryBox.classList.remove("hide")
    setScore.classList.add("hide")

}
loadQuestion()
