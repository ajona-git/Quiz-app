import {questionsBank} from "./questions.js"
let questionCounter = 0;
let score = 0;

const questionNumber = document.querySelector('.question-number');
const questionClass = document.querySelector('.question');
const optionsSection = document.querySelector('.option-section');
const nextButton = document.querySelector('.next');

const previousButton = document.querySelector('.previous');
const footerButtons = document.querySelector('.footer-section');
const submitButton = document.querySelector('.submit');



nextButton.addEventListener('click', ()=>{
  questionCounter++;
  

  if(questionCounter < questionsBank.length){
    loadQuestion()
  }else{
    showScore()
  }
 });
previousButton.addEventListener('click', ()=>{
  if(questionCounter > 0){
    questionCounter--;
    loadQuestion()
  }
})


function loadQuestion(){

  // this is to get the exact question's meta data including the question the answer array and the correct option
  const question = questionsBank[questionCounter];

  //update the question on the page
  questionClass.innerText =  question.question;
  questionNumber.innerHTML = `Question ${questionCounter + 1} of ${questionsBank.length}` 
  console.log(questionClass)
  
  loadOptions(question);
  toggleNavigationButtons()

}
loadQuestion();

function loadOptions(question){
  //clear the options section from previous question options
  optionsSection.innerHTML = ''
    
  question.answers.forEach((answer, index)=>{
  const optionButton = document.createElement('button');
  optionButton.innerText = answer;
  optionButton.classList.add('option');
  optionsSection.appendChild(optionButton)
 });
 
}

function toggleNavigationButtons(){
  if(questionCounter === 0){
    previousButton.classList.add('hidden')
  }else{
    previousButton.classList.remove('hidden')
  }

  const isLastQuestion = questionsBank.length - 1 === questionCounter;
  if(isLastQuestion){
  submitButton.classList.remove('hidden');
  nextButton.classList.add('hidden')
 }else{
  submitButton.classList.add('hidden');
  nextButton.classList.remove('hidden')
 }

}



