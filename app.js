const computerchoicedisplay=document.getElementById('computer-choice');
const userchoicedisplay=document.getElementById('user-choice');
const resultdisplay=document.getElementById('result');
const possiblechoice=document.querySelectorAll('button');
let userchoice;
let computerChoice;
let result;

possiblechoice.forEach(possiblechoices => possiblechoices.addEventListener('click',(e)=>{
     userchoice=e.target.id
     userchoicedisplay.innerHTML=userchoice
      computerGeneratorChoice()
      getResult();
}));
function computerGeneratorChoice()
{
   const randomNumber=Math.floor(Math.random() * possiblechoice.length) + 1;
   if(randomNumber==1)
   {
     computerChoice='rock';
   }
   if(randomNumber==2)
   {
     computerChoice='scissors';
   }
   if(randomNumber==3)
   {
     computerChoice='paper';
   }
   computerchoicedisplay.innerHTML=computerChoice;
}
function getResult()
{
   if(userchoice==computerChoice)
   {
     result='its a draw!'
   }
   if(userchoice==='paper' && computerChoice==='rock')
   {
     result='you win!'
   }
   if(userchoice==='paper' && computerChoice==='scissors')
   {
     result='you lost!'
   }
   if(userchoice==='rock' && computerChoice==='paper')
   {
     result='you lost!'
   }
   if(userchoice==='rock' && computerChoice==='scissors')
   {
     result='you win!'
   }
   if(userchoice==='scissors' && computerChoice==='rock')
   {
     result='you lost!'
   }
   if(userchoice==='scissors' && computerChoice==='paper')
   {
     result='you win!'
   }
   if(result==='you win!') resultdisplay.style.color='#008000';
   if(result==='you lost!') resultdisplay.style.color='#cc0000';
   if(result==='its a draw!') resultdisplay.style.color='#4dd2ff';

   resultdisplay.innerHTML=result;
}