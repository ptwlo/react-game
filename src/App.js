import React from 'react';
import {PlayerCard} from './PlayerCard.js';

class Game extends React.Component{
  constructor(){
    super();
    this.signs = ["rock", "scissors", "paper"];
    this.state = {
      playerOne: "rock",
      playerTwo: "scissors"
    }
  }
  playGame = ()=>{
    this.setState({
      playerOne: this.signs[Math.floor(Math.random() * 3)],
      playerTwo: this.signs[Math.floor(Math.random() * 3)],
    });
  }
  decideWinner = ()=>{
    const PLAYER_ONE = this.state.playerOne;
    const PLAYER_TWO = this.state.playerTwo;

    if(PLAYER_ONE == PLAYER_TWO){
      return "It's a Tie";
    }else if((PLAYER_ONE === "rock" && PLAYER_TWO === "scissors") || (PLAYER_ONE === "paper" && PLAYER_TWO === "rock") || (PLAYER_ONE === "scissors" && PLAYER_TWO === "papers")){
        return "Player 1 wins";
    }else{
      return "Player 2 wins";
    }
  }
  render(){
    return(
      <>
      <h1 id="header">Game made with React</h1>
      <div className="style">
        <div id="box">
          <PlayerCard name="Player One" sign={this.state.playerOne}/>
          <PlayerCard name="Player Two" sign={this.state.playerTwo}/>
        </div>
        <div className="winner">{this.decideWinner()}</div>
        <button type="button" onClick={this.playGame}>Play the Game</button>
      </div>
      </>
    );
  }
}
export default Game;
