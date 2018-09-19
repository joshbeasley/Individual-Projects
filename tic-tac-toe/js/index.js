$(document).ready(function() {
  var playerValue = "X";
  var computerValue = "O";
  var grid = ["+", "+", "+", "+", "+", "+", "+", "+", "+"];
  var win = false;
  //keeps tarck of computer turn
  var count = 0;
  var overallCount = 0;
  var scoreX = 0;
  var scoreO = 0;

  //Toggles the selection of X or O
  $("#chooseX").click(function() {
    playerValue = "X";
    computerValue = "O";
    $("#chooseX").addClass("btn-primary");
    $("#chooseO").removeClass("btn-primary");
    reset();
  });
  
  $('#resetGame').click(function(){
    reset();
    scoreX = 0;
    scoreO = 0;
    $('#scoreX').text(0);
    $('#scoreX').text(0);
  });

  $("#chooseO").click(function() {
    playerValue = "O";
    computerValue = "X";
    $("#chooseO").addClass("btn-primary");
    $("#chooseX").removeClass("btn-primary");
    reset();
  });

  //changes the value of the spot in html and grid array
  function playerTurn(playerValue, id) {
    var spotTaken = $("#" + id).text();
    if (spotTaken === "+") {
      grid[id] = playerValue;
      $("#" + id).html(playerValue);
      
      count++;
      overallCount++;
      winCondition(grid, playerValue);
      if (win === false && overallCount < 9) {
        computerTurn();
        winCondition(grid, computerValue);
      }
      if(win === true){
      if (overallCount === 9 && win === false) 
          alert("You have tied. Try Again!");
        
      reset();
      }
    }
  }

  function computerTurn() {
    var taken = false;
    while (taken === false && count !== 5) {
      //generated random computer turn
      var computerMove = (Math.random() * 9).toFixed();
      var move = $("#" + computerMove).text();
      if (move === "+") {
        $("#" + computerMove).text(computerValue);
        grid[computerMove] = computerValue;
        overallCount++;
        taken = true;
      }
    }
  }

  //What happens when the pkayer chooses a spot
  $(".tic").click(function() {
    var slot = $(this).attr("id");
    playerTurn(playerValue, slot);
  });

  //resets the grid array and the html to the initial state
  function reset() {
    grid = ["+", "+", "+", "+", "+", "+", "+", "+", "+"];
    $(".tic").html("+");
    count = 0;
    overallCount = 0;
    win = false;
 
  }

  // 0 1 2
  // 3 4 5
  // 6 7 8

  function winCondition(turnArray, currentValue) {
    if (
      turnArray[0] === currentValue &&
      turnArray[1] === currentValue &&
      turnArray[2] === currentValue
    ) {
      //reset();
      if(currentValue === 'X'){
        scoreX++;
        $('#scoreX').text(scoreX);
      }
      else{
        scoreO++;
        $('#scoreO').text(scoreO);
      }
      win = true;
      alert("Player " + currentValue + " wins!!! (Top Row across 0, 1, 2).");
    } else if (
      turnArray[3] === currentValue &&
      turnArray[4] === currentValue &&
      turnArray[5] === currentValue
    ) {
      //reset();
       if(currentValue === 'X'){
        scoreX++;
        $('#scoreX').text(scoreX);
      }
      else{
        scoreO++;
        $('#scoreO').text(scoreO);
      }
      win = true;
      alert("Player " + currentValue + " wins!!! (Middle Row across 3, 4, 5).");
    } else if (
      turnArray[6] === currentValue &&
      turnArray[7] === currentValue &&
      turnArray[8] === currentValue
    ) {
      //reset();
       if(currentValue === 'X'){
        scoreX++;
        $('#scoreX').text(scoreX);
      }
      else{
        scoreO++;
        $('#scoreO').text(scoreO);
      }
      win = true;
      alert("Player " + currentValue + " wins!!! (Bottom Row across 6, 7, 8).");
    } else if (
      turnArray[0] === currentValue &&
      turnArray[3] === currentValue &&
      turnArray[6] === currentValue
    ) {
      //reset();
       if(currentValue === 'X'){
        scoreX++;
        $('#scoreX').text(scoreX);
      }
      else{
        scoreO++;
        $('#scoreO').text(scoreO);
      }
      win = true;
      alert("Player " + currentValue + " wins!!! (Left Column down 0, 3, 6).");
    } else if (
      turnArray[1] === currentValue &&
      turnArray[4] === currentValue &&
      turnArray[7] === currentValue
    ) {
      //reset();
       if(currentValue === 'X'){
        scoreX++;
        $('#scoreX').text(scoreX);
      }
      else{
        scoreO++;
        $('#scoreO').text(scoreO);
      }
      win = true;
      alert(
        "Player " + currentValue + " wins!!! (Middle Column down 1, 4, 7)."
      );
    } else if (
      turnArray[2] === currentValue &&
      turnArray[5] === currentValue &&
      turnArray[8] === currentValue
    ) {
      //reset();
       if(currentValue === 'X'){
        scoreX++;
        $('#scoreX').text(scoreX);
      }
      else{
        scoreO++;
        $('#scoreO').text(scoreO);
      }
      win = true;
      alert("Player " + currentValue + " wins!!! (Right Column down 2, 5, 8).");
    } else if (
      turnArray[0] === currentValue &&
      turnArray[4] === currentValue &&
      turnArray[8] === currentValue
    ) {
      //reset();
       if(currentValue === 'X'){
        scoreX++;
        $('#scoreX').text(scoreX);
      }
      else{
        scoreO++;
        $('#scoreO').text(scoreO);
      }
      win = true;
      alert(
        "Player " +
          currentValue +
          " wins!!! (Diagonally from left to right 0, 4, 8)."
      );
    } else if (
      turnArray[2] === currentValue &&
      turnArray[4] === currentValue &&
      turnArray[6] === currentValue
    ) {
      //reset();
       if(currentValue === 'X'){
        scoreX++;
        $('#scoreX').text(scoreX);
      }
      else{
        scoreO++;
        $('#scoreO').text(scoreO);
      }
      win = true;
      alert(
        "Player " +
          currentValue +
          " wins!!! (Diagonally from right to left 2, 4, 6)."
      );
    } else {
      win = false;
    }
  }
});