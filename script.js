const gameBoard = (()=>{

  let _gameBoard = [1,2,3,4,5,6,7,8,9];
  
  const setBoard = (index, value) => {
      _gameBoard[index]= value;
     return _gameBoard
  }
  
  
  return {
    //  _gameBoard,
      setBoard
  }
  
  })();
  
  //const foo = gameBoard._gameBoard[1];
  //console.log(gameBoard._gameBoard[0]);
  //gameBoard.setBoard = [2,3]
  
  gameBoard.setBoard(0,"X");
  //console.log(gameBoard.setBoard());
  gameBoard.setBoard(1,"O");
  //console.log(gameBoard.setBoard());
  
  function makeBoard(array) {
     // console.log(gameBoard.setBoard()+"");
      let board=document.querySelector(".board");
      board.style.backgroundColor="red";
      board.style.width="100px";
      board.style.height="100px";

//console.log(gameBoard.setBoard().length);
//console.log(gameBoard.setBoard());

for (i=0;i<gameBoard.setBoard().length;i++){
console.log("hello i is: "+i);
console.log(gameBoard.setBoard()[i]);
let newDiv = document.createElement('div');
newDiv.classList="newDiv";
newDiv.innerText="box "+ i;
board.appendChild(newDiv);
}
  }
  
  makeBoard();
  

  