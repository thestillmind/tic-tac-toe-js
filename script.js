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
  //  clickBox(i); 
    }
    
        function createNewBox(boxNumber) {
      let newDiv = document.createElement('div');
      newDiv.classList="newDiv";
      newDiv.setAttribute('id', "box"+boxNumber);
      newDiv.innerText="box "+ gameBoard.setBoard()[boxNumber];
      board.appendChild(newDiv);     
    }
  };

    function clickBox(letter){
      let fooLetter="X";
      let foo = document.getElementsByClassName("newDiv");     
      Array.from(foo).forEach((element)=>{
       element.addEventListener('click', (e)=>{

        if (fooLetter=="X"){
          fooLetter="O";
        }
        else if (fooLetter=="O"){
          fooLetter="X";
        }
         alert("this is box number"+element.id);
        element.innerText=fooLetter;
         console.log("clickbox letter is: " + fooLetter);


       });
      });     
    }      

  return {
      setBoard,
      makeBoard,
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

  const runGame = (()=>{  
   
  // let player=player2;
    console.log(player1.marker);
    console.log(player2.marker);

    let counter = 0;
 console.log("counter is: " + counter);
  gameBoard.makeBoard();    

   function switchPlayer(player){   
 
  
    return  gameBoard.clickBox(player.marker);
  
   }

return {
switchPlayer
}
  })();

 // console.log(runGame.switchPlayer());
     runGame.switchPlayer(player1);

 //console.log(runGame.foo);





  