import {questionsBank} from './questions.js'
console.log(questionsBank);
let question='';
let displayQuestions='';
let option1;
let option2;
let option3;
let option4;

function displayQuestionHTML(){

  questionsBank.forEach((questionBank)=>{

    question = questionBank.question;
    console.log(question);
    option1 = questionBank.answers[0];
    console.log(option1)
    option2 = questionBank.answers[1];
    console.log(option2)
    option3 = questionBank.answers[2];
    console.log(option3)
    option4 = questionBank.answers[3];
    console.log(option4);
    
  })

  displayQuestionHTML=
  `
  <div class="quiz-app">
      <section class="question-section">
        <p class="question">${question}</p>
      </section>
      <section class="options-section">
        <p class="option1">${option1}</p>
        <p class="option2">${option2}</p>
        <p class="option3">${option3}</p>
        <p class="option4">${option4}</p>
      </section>
      <section class="previous-next">
        <button class="previous">Previous</button>
        <button class="next">Next</button>
      </section>
    </div>
  `
  document.querySelector('.position-app').innerHTML = displayQuestionHTML
}

displayQuestionHTML()
