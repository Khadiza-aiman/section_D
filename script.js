
document.addEventListener("DOMContentLoaded", function(){ 
  let currentPlayer = "X";
  let gameActive = true;
  let board = ["","","","","","","","",""];
  let cells = document.getElementsByClassName("cell");

  const winComb = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  for(let i=0; i<cells.length; i++){
    cells[i].addEventListener("click", function(){
      if(board[i] !== "" || !gameActive) return;

    
      cells[i].textContent = currentPlayer; 
      board[i] = currentPlayer;

      checkWinner();
    });
  }

  function checkWinner(){
    for(let i=0;i<winComb.length;i++){
      let [a,b,c] = winComb[i];
      if(board[a] && board[a] === board[b] && board[a] === board[c]){
        document.getElementById("winner").textContent = currentPlayer + " Wins!";
        gameActive = false;
        return;
      }
    }

    if(!board.includes("")){
      document.getElementById("winner").textContent = "It's a Draw!";
      gameActive = false;
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.getElementById("winner").textContent = "Current Player : " + currentPlayer;
  }

  document.getElementById("reset").addEventListener("click", function(){
    for(let i=0;i<cells.length;i++){
      cells[i].textContent = "";
    }
    board = ["","","","","","","","",""];
    currentPlayer = "X";
    gameActive = true;
    document.getElementById("winner").textContent = "Current Player : X";
  });
});