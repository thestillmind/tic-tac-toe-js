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
     newDiv.innerText="box "+ +(boxNumber+1);
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
//console.log(_gameBoard);
}
 };

 return {
     makeBoard,
     getBoard,
     setBoard
 }  
 })();     

 const makeBoardInteractive = (()=>{
   const clickBox = (player) => {
     let thisPlayer = player;
     let boardBoxes = document.getElementsByClassName("newDiv");

     Array.from(boardBoxes).forEach((element)=>{   
      element.addEventListener('click', ()=>{     
      
            gameBoard.setBoard(element.id, thisPlayer); 
            runGame.checkWins();         
                thisPlayer = currrentPlayer;                   
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
         console.log("Player One Wins!");
        }       
        else if (winningMoves[i].every(x => x=="O")==true){
        console.log("Player Two Wins!");
        }
     
      }                  

 };    


 const gameOver = ()=>{

  
 };

 return {
   switchPlayer,
   checkWins,
   gameOver
 }  
 })();


gameBoard.makeBoard();  
currrentPlayer = player1;
makeBoardInteractive.clickBox(currrentPlayer);
