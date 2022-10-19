let startBtn = document.getElementById("start");
let SubmitBtn = document.getElementById("submit");
let home = document.getElementById("home");
let quizContainer = document.getElementById("quiz-container");
let qNum = document.getElementById("qNum");
let question = document.getElementById("question");
let optionWrapper = document.getElementById("option-wrapper");
let option = optionWrapper.getElementsByClassName("option");
let op1 = document.getElementById("op1");
let op2 = document.getElementById("op2");
let op3 = document.getElementById("op3");
let op4 = document.getElementById("op4");
let result = document.getElementById("result");
let quitBtn = document.getElementById("quit");
let replayBtn = document.getElementById("replay");
let msg = document.getElementById("msg");
let id = 0;
let submitBtnDisable = true;
let opt = "";
let score = 0;

const Question = [
    {
        id: 1,
        q: "You have a part of your page that include user reviews. Which tag would you use to wrap it?",
        a: "op1",
        op: [
            "<section>",
            "<header>",
            "<article>",
            "<nav>"
        ]
    },
    {
        id: 2,
        q: "India is a ...?",
        a: "op2",
        op: [
            "city",
            "Countary",
            "State",
            "district"
        ]
    },
    {
        id: 3,
        q: "India is a ...?",
        a: "op3",
        op: [
            "city",
            "State",
            "Countary",
            "district"
        ]
    }
]

// console.log(option[3].attributes[1].value);

startBtn.addEventListener('click', () => {
    Start();
    id = 0;
    newQuestion(id);
    id += 1;
});

SubmitBtn.addEventListener('click', () => {
    // Start();
    if (!submitBtnDisable) {
        submitBtnDisable = true;
        CheckAns(opt);
        setTimeout(() => {
            newQuestion(id);
            id += 1;
            for (let index = 0; index < option.length; index++) {
                const element = option[index];
                element.style.background = "var(--pure)";
                element.style.color = "var(--dark)";
                element.style.borderColor = "transparent";
            }
            if (id > Question.length) {
                Result();
            }
        }, 800);
    }
    else
    alert("Please Select atleast one Option to Continue..");
});

quitBtn.addEventListener('click', () => {
    Home();
});

// Options Click Events
op1.addEventListener('click',
    () => {
        option_selection("op1");
        opt = "op1"
        submitBtnDisable = false;
        // console.log("option 1 Clicked...");
    });
op2.addEventListener('click',
    () => {
        option_selection("op2");
        opt = "op2";
        submitBtnDisable = false;
        // console.log("option 1 Clicked...");
    });
op3.addEventListener('click',
    () => {
        option_selection("op3");
        opt = "op3";
        submitBtnDisable = false;
        // console.log("option 1 Clicked...");
    });
op4.addEventListener('click',
    () => {
        option_selection("op4");
        opt = "op4";
        submitBtnDisable = false;
        // console.log("option 1 Clicked...");
    });

replayBtn.addEventListener('click', () => {
    Start();
    id = 0;
    newQuestion(id);
    id += 1;
});



// functions

function Start() {
    home.style.display = "none";
    result.style.display = "none";
    quizContainer.style.display = "block";
    SubmitBtn.disable = true;
    score = 0;
    // console.log("Start function Running.....");
}

function Home() {
    home.style.display = "block";
    quizContainer.style.display = "none";
    result.style.display = "none";
    // console.log(" Home function Running.....");
}

function newQuestion(id) {
    id += 1;
    // console.log("New Question");
    if (id <= Question.length) {
        qNum.innerText = id;
        question.innerText = Question[id - 1].q;
        op1.innerText = Question[id - 1].op[0];
        op2.innerText = Question[id - 1].op[1];
        op3.innerText = Question[id - 1].op[2];
        op4.innerText = Question[id - 1].op[3];
    }
}

function option_selection(opt) {
    // let opt = option.item(this).getAttributeNode("id").value;
    // console.log(opt);
    // console.log("Running...");
    for (let index = 0; index < option.length; index++) {
        const element = option[index];
        element.style.background = "var(--pure)";
        element.style.color = "var(--dark)";
        element.style.borderColor = "transparent";
        if (opt == element.attributes[1].value) {
            console.log(element.attributes[1].value);
            element.style.borderColor = "var(--dYellow)";
            element.style.color = "var(--dYellow)";
            element.style.background = "var(--yellow)";
        }
    }
}

function Result() {
    home.style.display = "none";
    quizContainer.style.display = "none";
    result.style.display = "block";
    document.getElementById("obtain").innerText = score;
    document.getElementById("total").innerText = Question.length;
    if(score == Question.length){
        msg.innerText = "You Are The Brilliant Performer";
        msg.style.color = "var(--green)";
    }
}

function CheckAns(opt) {
    let ans = Question[id - 1].a;
    // console.log(ans)
    /*
    if(ans==opt){
        console.log("Answer is correct");
        opt.
    }*/
    for (let index = 0; index < option.length; index++) {
        const element = option[index];
        if (ans == opt) {
            if (opt == element.attributes[1].value) {
                element.style.borderColor = "var(--Dgreen)";
                element.style.color = "var(--Dgreen)";
                element.style.background = "var(--green)";
                score+=1;
            }
        }
        else {
            if (ans == element.attributes[1].value) {
                element.style.borderColor = "var(--Dgreen)";
                element.style.color = "var(--Dgreen)";
                element.style.background = "var(--green)";
            }
            if (opt == element.attributes[1].value) {
                element.style.borderColor = "var(--Dred)";
                element.style.color = "var(--Dred)";
                element.style.background = "var(--Lred)";
            }
        }
    }
}
// console.log("Running")

window.onload = () => {
    submitBtnDisable = true;

}

