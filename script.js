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
      console.log(gameBoard.setBoard()+"");
  }
  
  makeBoard();
  