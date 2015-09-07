(function(){
  function Game() {

  }

  Game.prototype.start = function() {
      // var cpu = prompt("Play against computer? y/n").toLowerCase();

      this.player1 = new Player();
      // this.player2 = cpu == "y" ? new Cpu() : new Player();
      this.player2 = new Cpu();

      this.moveNum = 0;

      // while ((this.player1.score < 5 && this.player2.score < 5) || this.moveNum < 5) {
      //     this.move();
      //     this.moveNum++;
      // }

      $(".data").text("");

  };

  Game.prototype.move = function() {
      console.log("move");
      var n1 = this.player1.move();
      var n2 = this.player2.move();

      if (n1 == n2 + 1){
          console.log("1");
          this.player1.score++;
          this.player1.score++;
      } else if (n2 == n1 + 1){
          console.log("2");
          this.player2.score++;
          this.player2.score++;
      } else if (n1 < n2) {
          console.log("3");
          this.player1.score++;
      } else if (n2 < n1) {
          console.log("4");
          this.player2.score++;
      }
      $("#playerMoves").text(this.player1.moves);
      $("#cpuMoves").text(this.player2.moves);
      $("#playerScore").text(this.player1.score);
      $("#cpuScore").text(this.player2.score);

      this.moveNum++;
  };

  function Player() {
      this.score = 0;
      this.moves = [];
  }

  Player.prototype.move = function() {
      var n = Number($("#move").val());
      this.moves.push(n);
      $("#move").val("");
      return n;
  };

  Cpu.prototype = new Player();
  Cpu.prototype.constructor = Cpu;
  function Cpu() {

  }

  Cpu.prototype.move = function() {
      var n;
      // array containing move list
      // moveList[i][j] where i is moveNum and j is
      var moveList = []

      if (game.moveNum === 0) {
          // choose 1 as starting point
          n = 1;
      } else if (game.moveNum == 1){
          // if player predicted 1 as first move
          if (game.player1.moves[0] == "2") {
              // predict 2 as player's next move
              n = 3;
          // if player tried 1 as starting point as well, he is getting to know me
          } else if (game.player1.moves[0] == "1") {
              // predict 1 as player's next move
              n = 2;
          } else {
              n = 1;
          }
      } else if (game.moveNum == 2) {
          // player1 is as smart as me
          if (game.player1.score === 0 && this.score === 0) {
              n = 3;
          } else {
              // fallback
              n = 2;
          }
      } else {
          // fallback
          n = 2;
      }
      this.moves.push(n);
      return n;
  };

  var game = new Game();
  game.start();

  $("#new").click(function(e){
    game.start();
  })

  $("#go").click(function(e){
    console.log("click");
    game.move();
  })

})()
