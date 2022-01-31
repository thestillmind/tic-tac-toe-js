const gameBoard = (()=>{
  let _gameBoard = [1,2,3,4,5,6,7,8,9];  
  const setBoard = (index, value) => {
      _gameBoard[index]= value;
     return _gameBoard
  }  

  const makeBoard = ()=>{
    let board=document.querySelector(".board");
    for (i=0;i<gameBoard.setBoard().length;i++){    
    createNewBox(i);
    clickBox(i); 
    }
    
    function createNewBox(boxNumber) {
      let newDiv = document.createElement('div');
      newDiv.classList="newDiv";
      newDiv.setAttribute('id', "box"+boxNumber);
      newDiv.innerText="box "+ gameBoard.setBoard()[boxNumber];
      board.appendChild(newDiv);     
    }
    
    function clickBox(boxNumber){
    let foo = document.querySelector("#box"+boxNumber);
      console.log(foo);
      foo.addEventListener('click', ()=>{
        alert("this is box"+boxNumber);
      })
    }

  };
  
  return {
      setBoard,
      makeBoard
  }  
  })();  
  
  // gameBoard.setBoard(0,"X");  
  // gameBoard.setBoard(1,"O");  
  // console.log(gameBoard.makeBoard());


  const Player = (name, marker) => {
    return {
      name,
      marker
    }
  };

  const player1= Player("Player1", "X");
  const player2= Player("Player2", "O");

   gameBoard.setBoard(0,"X"); 
   gameBoard.setBoard(0, player2.marker);
    gameBoard.makeBoard();



  console.log(player2.name);

