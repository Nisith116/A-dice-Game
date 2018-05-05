/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score,dice,player,currentScore,sum=0,Game,x='',y='';

setZero()
dice=Math.floor(Math.random()*6)+1;
function setZero(){
  document.getElementById('score-0').textContent='0'
  document.getElementById('score-1').textContent='0'
  document.getElementById('current-0').textContent='0'
  document.getElementById('current-1').textContent='0'
  currentScore=0;
  player=0;
  sum=0;
  score=[0,0];
  document.querySelector(".dice").style.display='none';
  document.querySelector('.player-0-panel').classList.remove('winner')
  document.querySelector('.player-1-panel').classList.remove('winner')
  document.querySelector('.player-0-panel').classList.remove('active')
  document.querySelector('.player-1-panel').classList.remove('active')
  document.querySelector('.player-0-panel').classList.add('active')

  x=document.getElementById('name-0').textContent='PLAYER 1'
  y=document.getElementById('name-1').textContent='PLAYER 2'


}


setZero();

var x = document.querySelector("#score-" + player).textContent;
document.querySelector(".dice").style.display='none';

document.querySelector(".btn-roll").addEventListener('click',function(){
    if (x != 'You Win' && y != 'You Win'){
      var dice=Math.floor(Math.random()*6)+1;
      diceDom = document.querySelector('.dice')
      diceDom.style.display='block';
      diceDom.src = 'dice-' + dice + '.png'
      if (dice != 1){
         sum=sum + dice;
        document.querySelector("#current-" + player).textContent=sum;
      }
      else{
        currentScore=sum
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector(".dice").style.display='none';
        if (player==0){
          document.getElementById('current-0').textContent='0'
          if (currentScore >= 100){
            document.getElementById('name-0').textContent='You Win';
            document.querySelector('player-' + player + 'panel').classList.add('winner')
            document.querySelector('player-' + player + 'panel').classList.remove('active')
          }
          else{
            Game=true
          }
          player = 1
          sum=0
        }
        else{
          document.getElementById('current-1').textContent='0'
          if (currentScore >= 100){
            document.getElementById('name-1').textContent='You Win'
          }
          else{
            Game=true
          }
          player = 0
          sum=0
        }
      }
    }
    x = document.getElementById('name-0').textContent
    y=document.getElementById('name-1').textContent
    })

document.querySelector(".btn-hold").addEventListener('click',function(){
  if (x != 'You Win' && y != 'You Win'){
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    if (player==0){
      score[player]+=sum
      document.getElementById('current-0').textContent='0'
      document.getElementById('score-0').textContent=score[player]
      if (score[player] >= 100){
        document.getElementById('name-0').textContent='You Win'
        document.querySelector('player-' + player + 'panel').classList.add('winner')
        document.querySelector('player-' + player + 'panel').classList.remove('active')
        document.querySelector(".btn-roll").addEventListener('click',setZero)
      }
      else{
        Game=true
      }
      player = 1
      sum=0
    }
    else{
      score[player]+=sum
      document.getElementById('current-1').textContent='0'
      document.getElementById('score-1').textContent=score[player]
      if (score[player] >= 100){
        document.getElementById('name-1').textContent='You Win'
        document.querySelector('player-' + player + 'panel').classList.add('winner')
        document.querySelector('player-' + player + 'panel').classList.remove('active')
      }
      else{
        Game=true
      }
      player = 0
      sum=0
    }
  }
  x = document.getElementById('name-0').textContent
  y=document.getElementById('name-1').textContent
})

document.querySelector(".btn-new").addEventListener('click',setZero)
