import {questionsBank} from './questions.js';

let questionCounter = 0;

const answers=[];



function saveAnswer(questionObj , selectedOption){
  const existingAnswer = answers.find((answerObj)=>{
    return answerObj.id === questionObj.id
  });
  if(existingAnswer){
    existingAnswer.selectedAnswer = selectedOption
  } else {
      answers.push({
      id: questionObj.id,
      selectedAnswer: selectedOption
    });

  }

  console.log(answers);

}
generateQuestionHTML();
function generateQuestionHTML(){
  const isLastQuestion = questionCounter === questionsBank.length - 1;
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
      ${isLastQuestion 
        ? `<button class="submit js-submit">Submit</button>`
        : `<button class="next js-next">Next</button>`}
        <button class="previous js-previous">Previous</button>
     </section>
  </div>
 `
 document.querySelector('.position-app').innerHTML= questionHTML;

 const nextButton = document.querySelector('.js-next');

 if(nextButton){
  nextButton.addEventListener('click',()=>{
    questionCounter++;

    if(questionCounter >= questionsBank.length ){
      questioncounter = 0;
    }
    generateQuestionHTML()
    console.log(questionCounter)
  })
 }
 const submitButton = document.querySelector('.js-submit')
 if(submitButton){
  submitButton.addEventListener('click',()=>{
    scoreAnswers();
  })
 }



  document.querySelector('.js-previous').addEventListener('click', ()=>{
    questionCounter--;
    if(questionCounter < 0 ){
      questionCounter = questionsBank.length - 1;
    }
    generateQuestionHTML()
  });

  document.querySelector('.options-section').addEventListener('click', (e)=>{
  if(e.target.classList.contains('js-option')){
    saveAnswer(questionsBank[questionCounter], e.target.innerText);
  }
});
}
function scoreAnswers(){
  let score = 0;

  answers.forEach((answer)=>{

    const correctQuestion = questionsBank.find((question)=>{
      return question.id === answer.id;
    });

    if(correctQuestion){
      if(answer.selectedAnswer === correctQuestion.correct){
        score++;
      }
    }

  });

  console.log(`Your score is ${score}`);
}

