const quizDB = [
    {
        question: "Q1.What is Full Form of HTML?",
        a: "Hello to my land",
        b: "hey text markup language",
        c: "Hypertext Markup Language",
        d: "HyperText markup language",
        ans: "ans3"
    }
    , {
        question: " Q2.What is CSS?",
        a: "CSS is a style sheet language",
        b: "CSS is designed to separate the presentation and content, including layout, colors, and fonts",
        c: "CSS is the language used to style the HTML documents",
        d: "All of the mentioned",
        ans: "ans4"
    },
    {
        question: "Q3.Which of the following tag is used to embed css in html page?",
        a: "<css>",
        b: "<!DOCTYPE html>",
        c: "<script>",
        d: "<style>",
        ans: "ans1"
    },
    {
        question: "Q4.Which of the following CSS selectors are used to specify a group of elements?",
        a: "tag",
        b: "id",
        c: "class",
        d: "both class and tag",
        ans: "ans2"
    }

];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
// const Submit=document.querySelector('#Sumbit');

const answers = document.querySelectorAll('.answer');
// const ShowScore=document.querySelector('#ShowScore');
let questionCount = 0;

let score = 0;


const loadquestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;


}

loadquestion();
const getCheckAnswer = () => {
    let answer;
    answers.forEach((currentanswerElement) => {
        if (currentanswerElement.checked) {
            answer = currentanswerElement.id;
        }
    });
    return answer;
};
const deselectAll = () => {
    answers.forEach((currentanswerElement) => currentanswerElement.checked = false);
};
//  Submit = document.getElementById('#Submit');

// if(Submit){
Submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer()

    console.log("check answer => ", checkedAnswer)

    if (checkedAnswer == quizDB[questionCount].ans) {
        score++;
        console.log("score kya hai = >", score)
    };
    questionCount++;
    deselectAll();
    if (questionCount < quizDB.length) {
        loadquestion();
    }

    else {

        ShowScore.innerHTML =
            `
                <h3>your scored ${score}/${quizDB.length}</h3>
                <button class ="btn" onclick="location.reload()">PLAY Again</button> 
                `;

        ShowScore.classList.remove('ScoreArea');

    }
});
    // }