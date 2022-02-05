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
     
     // console.log("gameboard is "+gameBoard.getBoard());
      fooBoard = gameBoard.getBoard();
      let getEachInstanceOfWinningMoves;

     let winningMoves = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
       
     function findEachInstanceOf1() {
      console.log(`wining moves is ${winningMoves}`);
      //console.log(winningMoves.every(val => val === winningMoves[0]));
 
let fooMoves;
      winningMoves.forEach(element => {
        console.log(`winningmoves[0][0] is ${winningMoves[0][0]}`);

        const index = element.indexOf(1);
        console.log("index is: "+ index);
        element[index] = "X";
      });

      console.log()

    }


    findEachInstanceOf1();
     
     
     // console.log("winning moves is "+winningMoves[0]);

      //foo=["X","X","X"];
     // console.log(`foo[0] is ${foo[0]}`);
     // console.log(foo.every(val => val === foo[0]));

     //console.log(array1.every(isBelowThreshold));

      //winningMoves.forEach(element => console.log(element));
    };

   

  return {
    switchPlayer,
    checkWins
  }  
  })();


gameBoard.makeBoard();  
currrentPlayer = player1;
makeBoardInteractive.clickBox(currrentPlayer);
