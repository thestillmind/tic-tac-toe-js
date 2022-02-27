const main = (()=>{

const gameBoard = (()=>{
  let _gameBoard = [1,2,3,4,5,6,7,8,9];  
   

 const makeBoard = ()=>{
   let board=document.querySelector(".board");

   for (i=0;i<_gameBoard.length;i++){    
   createNewBox(i);
   }    
     function createNewBox(boxNumber) {
     let newDiv = document.createElement('div');
     newDiv.classList="newDiv";
     newDiv.setAttribute('id', boxNumber);
     
     board.appendChild(newDiv);     
   }
 };

const getBoard = ()=>{
 return _gameBoard;
};

 const setBoard = (box, player) => {
if ((_gameBoard[box]=="X")||(_gameBoard[box]=="O")){
return false;
}

else {
_gameBoard[box]=player.marker;
let divId =document.querySelector(`div[id="${box}"]`);
divId.innerText=player.marker;
runGame.switchPlayer();

}
 };

 const resetBoard = ()=>{
  _gameBoard = [1,2,3,4,5,6,7,8,9]; 
 };

 return {
     makeBoard,
     getBoard,
     setBoard,
     resetBoard
 }  
 })();     

 const makeBoardInteractive = (()=>{
  let boardBoxes = document.getElementsByClassName("newDiv");
   const clickBox = (player) => {   
    

     Array.from(boardBoxes).forEach((element)=>{   
      element.addEventListener('click', ()=>{    
       if (runGame.checkWins()==undefined){

         gameBoard.setBoard(element.id, currrentPlayer); 
     
          if (runGame.checkWins()!=undefined){
            console.log(runGame.checkWins());
          }
        }
                
          });
     });   
   };
 
   return {
     clickBox
   }
 
 })();


 const Player = (name, marker) => {
   return {
     name,
     marker
   }
 };

   let player1 = Player("player1", "X");
   let player2 = Player("player2", "O");
   let currrentPlayer;

 const runGame = (()=>{   

   const switchPlayer = ()=>{
     if (currrentPlayer==player1){
       currrentPlayer = player2;
     }
    else if (currrentPlayer==player2){
      currrentPlayer = player1;
    }
   };

   const checkWins = ()=>{
    let winningMoves = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
 
    //This populates winningMoves arr with corresponding places on the game board
      for (let i =0;i<winningMoves.length;i++){
        for (let j=0;j<winningMoves[i].length;j++){
          winningMoves[i][j]=gameBoard.getBoard()[(winningMoves[i][j]-1)];
 }
      }
      
    //This then checks if winningMoves arr has any winning matches
          for(let i=0;i<winningMoves.length;i++){
          if (winningMoves[i].every(x => x=="X")==true){            
        return "Player One wins!";
        }       
        else if (winningMoves[i].every(x => x=="O")==true){
       return "Player two wins!";
        }   
        else if (gameBoard.getBoard().every(x => typeof x =="string")){
          return "It's a tie!";
        }  
      }

 };    


 return {
   switchPlayer,
   checkWins
 }  
 })();

 const restartGame = (()=>{   

  const restart = ()=>{
let resetBtn=document.querySelector('#resetBtn');
resetBtn.addEventListener('click', ()=>{
currrentPlayer=player1;
gameBoard.resetBoard();
let boardBoxes = document.getElementsByClassName("newDiv");
  Array.from(boardBoxes).forEach((element)=>{ 
    element.innerText="";
  }); 
});

  };

  return {
    restart
  }

})();


gameBoard.makeBoard();  
currrentPlayer = player1;
makeBoardInteractive.clickBox(currrentPlayer);
restartGame.restart();
})();  
