const main = (() => {
  const gameBoard = (() => {
    let _gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const makeBoard = () => {
      let board = document.querySelector(".board");

      for (i = 0; i < _gameBoard.length; i++) {
        createNewBox(i);
      }
      function createNewBox(boxNumber) {
        let newDiv = document.createElement("div");
        newDiv.classList = "newDiv";
        newDiv.setAttribute("id", boxNumber);

        board.appendChild(newDiv);
      }
    };

    const getBoard = () => {
      return _gameBoard;
    };

    const setBoard = (box, player) => {
      if (_gameBoard[box] == "X" || _gameBoard[box] == "O") {
        return false;
      } else {
        _gameBoard[box] = player.marker;
        let divId = document.querySelector(`div[id="${box}"]`);
        divId.innerText = player.marker;
      }
    };

    const resetBoard = () => {
      _gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    };

    return {
      makeBoard,
      getBoard,
      setBoard,
      resetBoard,
    };
  })();

  const makeBoardInteractive = (() => {
    let boardBoxes = document.getElementsByClassName("newDiv");
    const clickBox = (player) => {
      Array.from(boardBoxes).forEach((element) => {
        element.addEventListener("click", () => {
          runGame.playGame(element);

        });
      });
    };

    return {
      clickBox,
    };
  })();

  const Player = (name, marker, score) => {
    return {
      name,
      marker,
      score,
    };
  };

  let player1 = Player("player1", "X", 0);
  let player2 = Player("player2", "O", 0);
  let currrentPlayer;

  const runGame = (() => {
   
    const playGame = (element) => {
      if (runGame.checkWins() == undefined) {
        gameBoard.setBoard(element.id, currrentPlayer);
        if (runGame.checkWins() == true) {
          currrentPlayer.score++;
          console.log("wiiner is " + currrentPlayer.name);
          runGame.scoreBoard();
        } else if (runGame.checkWins() == false) {
          console.log("its a tie");
        }
      }
    
      runGame.switchPlayer();
    };

    const switchPlayer = () => {
      if (currrentPlayer == player1) {
        currrentPlayer = player2;
      } else if (currrentPlayer == player2) {
        currrentPlayer = player1;
      }
    };

    const checkWins = () => {
      let winningMoves = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
      ];

      //This populates winningMoves arr with corresponding places on the game board
      for (let i = 0; i < winningMoves.length; i++) {
        for (let j = 0; j < winningMoves[i].length; j++) {
          winningMoves[i][j] = gameBoard.getBoard()[winningMoves[i][j] - 1];
        }
      }

      //This then checks if winningMoves arr has any winning matches
      for (let i = 0; i < winningMoves.length; i++) {
        if (winningMoves[i].every((x) => x == "X") == true) {
          console.log(i);
          return true;
        } else if (winningMoves[i].every((x) => x == "O") == true) {
          return true;
        } else if (gameBoard.getBoard().every((x) => typeof x == "string")) {
          return false;
        }
      }
    };

    const setScoreBoard = () => {};

    const scoreBoard = () => {
      let player1Span = document.querySelector("#player1-score");
      let player2Span = document.querySelector("#player2-score");
      player1Span.innerText = player1.score;
      player2Span.innerText = player2.score;
    };
    return {
      playGame,
      switchPlayer,
      checkWins,
      setScoreBoard,
      scoreBoard,
    };
  })();
 

  const restartGame = (() => {

const clearBoard = ()=>{
  currrentPlayer = player1;
        gameBoard.resetBoard();
        let boardBoxes = document.getElementsByClassName("newDiv");
        Array.from(boardBoxes).forEach((element) => {
          element.innerText = "";
        });
};

    const restartGame = () => {
      let resetBtn = document.getElementById("resetBtn");
      resetBtn.addEventListener("click", () => {
      clearBoard();
      runGame.scoreBoard();
      });
    };

    const restartRound = () => {
      let resetBtn = document.getElementById("resetRoundBtn");
      resetBtn.addEventListener("click", () => {
      clearBoard();      
      player1.score=0;
      player2.score=0;
      runGame.scoreBoard();
      });
    };
    return {
      restartGame,
      restartRound
    };
  })();

  gameBoard.makeBoard();
  currrentPlayer = player1;
  makeBoardInteractive.clickBox(currrentPlayer);
  restartGame.restartGame();
  restartGame.restartRound();
})();
