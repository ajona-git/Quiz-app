import {questionsBank} from './questions.js';
import { answers } from './answers-array.js';
let questionCounter = 0;

const answers=[{
  id: '1',
  selectedAnswer: 'Abuja'
},{
  id: '2',
  selectedAnswer:'Flora Shaw'
}];


generateQuestionHTML();
function generateQuestionHTML(){
 const questionHTML = 
 `
  <div class="quiz-app">
    <section class="question-section">
        <p class="question">${questionsBank[questionCounter].question}</p>
      </section>
      <section class="options-section">
        <button class="option1 js-option">${questionsBank[questionCounter].answers[0]}</button>
        <button class="option2 js-option">${questionsBank[questionCounter].answers[1]}</button>
        <button class="option3 js-option">${questionsBank[questionCounter].answers[2]}</button>
        <button class="option4 js-option">${questionsBank[questionCounter].answers[3]}</button>
      </section>
      <section class="previous-next">
        <button class="next js-next">Next</button>
        <button class="previous js-previous">Previous</button>
     </section>
  </div>
 `
 document.querySelector('.position-app').innerHTML= questionHTML;

 document.querySelector('.js-next').addEventListener('click', ()=>{
    questionCounter++;
    if(questionCounter >= questionsBank.length){
      questionCounter = 0;
    }
    console.log(questionCounter);
    generateQuestionHTML()
  });

  document.querySelector('.js-previous').addEventListener('click', ()=>{
    questionCounter--;
    if(questionCounter < 0 ){
      questionCounter = questionsBank.length - 1;
    }
    generateQuestionHTML()
  });

}



