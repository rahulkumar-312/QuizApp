const questions = [
    {
        'que': 'Which of the following is a markup Language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'Php',
        'correct': 'a',

    },
    {
        'que': 'What year was Javascript Launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of the above',
        'correct': 'b',

    },
    {
        'que': 'What does CSS Stand for?',
        'a': 'Hypertext Markup Language',
        'b': 'Cascading Style Sheet',
        'c': 'Jason Setion Store',
        'd': 'none',
        'correct': 'b',

    },
]

let index = 0;
let total = questions.length;
let right = 0, 
    wrong = 0;
const quesBox = document.getElementById("quesbox");
const optionsInputs = document.querySelectorAll(".options");
const loadquestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset()
    const data = questions[index]
    quesBox.innerText = `${index+1} ) ${data.que}`;
    optionsInputs[0].nextElementSibling.innerText = data.a;
    optionsInputs[1].nextElementSibling.innerText = data.b;
    optionsInputs[2].nextElementSibling.innerText = data.c;
    optionsInputs[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = () =>{
    const data = questions[index];
    const ans = getAnswer();
    if (ans == data.correct){
        right++;
    }else{
        wrong++
    }
    index++;
    loadquestion();
    return;
}

const getAnswer = () =>{
    let answer;
    optionsInputs.forEach(
        (input) => {
            if(input.checked){
                answer =  input.value;
            }

        }
    )
    return answer;
}


const reset = () =>{
    optionsInputs.forEach(
        (input) =>{
            input.checked = false;
        }
    )
}

const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
        <h3>Thank you for playing the quiz.</h3>
        <h2>${right} / ${total} are correct...!</h2>
    
    
    
    
    `
}

loadquestion();

