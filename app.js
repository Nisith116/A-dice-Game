/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score,dice,player,currentScore,sum=0,Game,x='',y='',lastDice,fs;

setZero()
dice1=Math.floor(Math.random()*6)+1;
dice2=Math.floor(Math.random()*6)+1;
function setZero(){
  document.getElementById('score-0').textContent='0'
  document.getElementById('score-1').textContent='0'
  document.getElementById('current-0').textContent='0'
  document.getElementById('current-1').textContent='0'
  currentScore=0;
  player=0;
  sum=0;
  score=[0,0];
  document.querySelector("#dice1").style.display='none';
  document.querySelector("#dice2").style.display='none';
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


document.querySelector(".btn-roll").addEventListener('click',function(){
    if (x != 'You Win' && y != 'You Win'){
      var dice1=Math.floor(Math.random()*6)+1;
      var dice2=Math.floor(Math.random()*6)+1;
      document.getElementById('dice1').style='block';
      document.getElementById('dice2').style='block';


      var z=document.querySelector('.Finalscore').value
      if (z){
        document.getElementById('dice1').src = 'dice-' + dice1 + '.png'
        document.getElementById('dice2').src = 'dice-' + dice2 + '.png'
        if (dice1===6 && dice2===6){
          score[player]=0
          document.querySelector("#score-" + player).textContent='0';
          document.querySelector('.player-1-panel').classList.toggle('active');
          document.querySelector('.player-0-panel').classList.toggle('active');
        }else{
          if (dice1 != 1 && dice2!=1){
             sum=sum + dice1+dice2;
            document.querySelector("#current-" + player).textContent=sum;
          }
          else{
            score[player]=0
            document.querySelector('.player-1-panel').classList.toggle('active');
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector("#dice1").style.display='none';
            document.querySelector("#dice2").style.display='none';
            if (player==0){
              document.getElementById('current-0').textContent='0'
              if (score[player] >= z){
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
              if (currentScore >= z){
                document.getElementById('name-1').textContent='You Win';
              }
              else{
                Game=true
              }
              player = 0
              sum=0
            }
          }
        }
      }else{
        prompt('enter final score')
      }


      lastDice=dice
    }
    x = document.getElementById('name-0').textContent
    y=document.getElementById('name-1').textContent
    })

document.querySelector(".btn-hold").addEventListener('click',function(){
  if (x != 'You Win' && y != 'You Win'){
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    var z=document.querySelector('.Finalscore').value
    if (z){
      if (player==0){
        score[player]+=sum
        document.getElementById('current-0').textContent='0'
        document.getElementById('score-0').textContent=score[player]
        if (score[player] >= z){
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
        if (score[player] >= z){
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

  }
  x = document.getElementById('name-0').textContent
  y=document.getElementById('name-1').textContent
})

document.querySelector(".btn-new").addEventListener('click',setZero)
