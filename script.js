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
  
  
  gameBoard.setBoard(0,"X");
  
  gameBoard.setBoard(1,"O");  
  
  function makeBoard(array) {
     let board=document.querySelector(".board");

for (i=0;i<gameBoard.setBoard().length;i++){

createNewBox(i);
}

function createNewBox(boxNumber) {
  let newDiv = document.createElement('div');
  newDiv.classList="newDiv";
  newDiv.setAttribute('id', "box"+boxNumber);
  newDiv.innerText="box "+ gameBoard.setBoard()[boxNumber];
  board.appendChild(newDiv);
  clickBox(boxNumber); 
}

function clickBox(boxNumber){
  //let foo = document.getElementsByClassName("newDiv");
 let foo = document.querySelector("#box"+boxNumber);
  console.log(foo);
  foo.addEventListener('click', ()=>{
    alert("this is box"+boxNumber);
  })
}
  }

 

  
  makeBoard();
  

  