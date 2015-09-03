(function(){
  function Game() {

  }

  Game.prototype.start = function() {
      var cpu = prompt("Play against computer? y/n").toLowerCase();

      this.player1 = new Player();
      this.player2 = cpu == "y" ? new Cpu() : new Player();

      console.log("Players: " + this.player1 + " " + this.player2);
      this.moveNum = 0;

      while ((this.player1.score < 5 && this.player2.score < 5) || this.moveNum < 5) {
          this.move();
          this.moveNum++;
      }

  };

  Game.prototype.move = function() {
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

      console.log("Player 1 moves: " + this.player1.moves);
      console.log("Player 2 moves: " + this.player2.moves);
      console.log("Player 1 score: " + this.player1.score);
      console.log("Player 2 score: " + this.player2.score);
  };

  function Player() {
      this.score = 0;
      this.moves = [];
  }

  Player.prototype.move = function() {
      var n = Number(prompt("Enter an integer greater than 0"));
      this.moves.push(n);
      return n;
  };

  Cpu.prototype = new Player();
  Cpu.prototype.constructor = Cpu;
  function Cpu() {

  }

  Cpu.prototype.move = function() {
      var n;
      if (game.moveNum === 0) {
          // choose 1 as starting point
          n = 1;
      } else if (game.moveNum == 1){
          // if player predicted 1 as first move
          if (game.player1.moves[0] == "2") {
              // predict 1 as player's next move
              n = 2;
          // if player tried 1 as starting point as well, he is getting to know me
          } else if (game.player1.moves[0] == "1") {
              // predict 2 as player's next move
              n = 3;
          } else {
              n = 1;
          }
      } else if (game.moveNum == 2) {
          // player1 is as smart as me
          if (game.player1.score === 0 && this.score === 0) {
              n = 1;
          } else {
              // fallback
              n = 2;
          }
      } else {
          // fallback
          n = 1;
      }
      this.moves.push(n);
      return n;
  };

  var game = new Game();
  //game.start();

})()
