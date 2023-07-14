//https://opentdb.com/api.php?amount=10

const _question = document.getElementById('Question');
const _options = document.querySelector('.quiz-options')

async function loadQuestion(){
    const APIUrl = 'https://opentdb.com/api.php?amount=1';
    const result = await fetch(`${APIUrl}`);
    const data = await result.json();
    //console.log(data.results[0]);
    showQuestion(data.results[0]);
}

function showQuestion(data){
    let correctAnswer = data.correct_answer;
    let incorrectAnswer = data.incorrect_answers;
    let optionsList = data.options_list;
    optionsList.splice(Math.random)
}

loadQuestion();

