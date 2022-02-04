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

 /* const makeBoard = ()=>{
    let board=document.querySelector(".board");
    for (i=0;i<_gameBoard.length;i++){    
    createNewBox(i);
  //  clickBox(i); 
    }    
      function createNewBox(boxNumber) {
      let newDiv = document.createElement('div');
      newDiv.classList="newDiv";
      newDiv.setAttribute('id', boxNumber);
      newDiv.innerText="box "+ +(boxNumber+1);
      board.appendChild(newDiv);     
    }
  };*/

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
console.log(`value is ${player.marker}`);
runGame.switchPlayer();
console.log(_gameBoard);
return true;
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
      let fooPlayer = player;
      let boardBoxes = document.getElementsByClassName("newDiv");
 
      Array.from(boardBoxes).forEach((element)=>{
  
       element.addEventListener('click', (e)=>{         
     
        gameBoard.setBoard(element.id, fooPlayer);
        
                 fooPlayer = currrentPlayer;                   
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
      
  function switchPlayer(){     
   if (currrentPlayer==player1){
     currrentPlayer = player2;
   }
  else if (currrentPlayer==player2){
    currrentPlayer = player1;
  }
      } 
  return {
    switchPlayer
  }  
  })();


gameBoard.makeBoard();  
currrentPlayer = player1;
makeBoardInteractive.clickBox(currrentPlayer);
