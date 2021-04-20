import React, {useState} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board 
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board(props) {   

  // TODO: set initial state
  const [hasWon, setHasWon] = useState(false);
  const [board, setBoard] = useState(createBoard);
  const [leftTries, setLeftTries] = useState(20);
  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  function createBoard() {
    let board = [];
    
    // TODO: create array-of-arrays of true/false values
    for (let rows = 0; rows < props.nrows; rows++) 
    {
      let row =[];
      for(let colns=0; x < colns.ncols;colns++)
      {
        row.push(Math.random() < props.chanceLightStartsOn);
      }
      board.push(row);
    }
    return board
  }

  /** handle changing a cell: update board & determine if winner */

  function flipCellsAround(coord) {
    let {ncols, nrows} = props;
    //let board = this.state.board;
    let board = board;
    //let board = {board};
    let [y, x] = coord.split("-").map(Number);
   
    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it
    flipCell(y,x);
    flipCell(y+1,x);
    flipCell(y-1,x);
    flipCell(y,x+1);
    flipCell(y,x-1);
    // win when every cell is turned off
    // TODO: determine is the game has been won
    let hasWon = board.every(row=>row.every(Cell => !Cell));
    setBoard(board);
    setHasWon(hasWon);
    setLeftTries(leftTries =>(leftTries-1))
  }

  /** Render game board or winning message. */
  let tableBoard = [];
    for(let rows=0; rows < props.nrows; rows++){
      let row=[];
      for(let colns=0;colns < props.ncols;colns++){
        let coord = '${rows} - ${colns}';
        row.push(
          <Cell
            key ={coord}
            isLit = {board[y][x]}
            flipCellsAroundMe ={() => flipCellsAround(coord)}
          />
        );
      }
      tableBoard.push(<tr> {row} </tr>);
    }
  if (haswon) {
    return(
      <div>
        <h1>
          Lights out
        </h1>
        <h2>
          You Won
        </h2>
        <h2>
          Left tries : {leftTries}
        </h2>
      </div>
    );  
  }else if(leftTries <=0){
    return(
      <div>
        <h1>
          Lights out
        </h1>
        <h2>
          You Lost!
        </h2>
        <h2>
          You have : {leftTries}
        </h2>

      </div>
    );
  }

  return(
    <div>
      
    </div>

  );
  

  
  

    // if the game is won, just show a winning msg along with the leaderboard
    /*let gameState;
    if(hasWon == false)
    {
      gameState = 
      <div>
        <h2>
          winner!!
        </h2>
        <table className ="Board-table">
          <tbody>
            {tableBoard}
          </tbody>
        </table>
      </div>
    }
    else{
      gameState=
      <div className = {Board}>
        <Leaderboard/>
      </div>
    }*/
    /*hasWon ? (gameState = <h2>winner!!</h2>)
    :(gameState=(
      <div>
        <table className ="Board-table">
          <tbody>
            {tableBoard}
          </tbody>
        </table>
      </div>
    ));*/

    
      

       
      
    /*<div>
      <tableBoard>
        {tableBoard()}
      </tableBoard>
      { hasWon ? (
          <div>
            <h2>
              You Won the game!!
            </h2>
            <Leaderboard/>
          </div>
        ):(
          <div className= {Board}>
            <Leaderboard/>
          </div>
        )}
    </div>*/
    /*<div>
        {tableBoard()}
      { hasWon ? (
          <div>
            <h2>
              You Won the game!!
            </h2>
            <p>
              {leftTries}
            </p>
            
          </div>
        ):(
          <div className= {Board}>
            
          </div>
        )}
    </div>*/
    
    
      /*<div>
        { hasWon ? (
          <div className = "winner">
            <p>
              You Won the game
            </p>
            <Leaderboard/>
          </div>
        ):(
          <div className= {Board}>
            <Leaderboard/>
          </div>
        )}
    
    
      </div>*/
    
      // TODO
  
      // make table board
      
      
      // render leaderboard when won or lost
  
      // TODO
         
    

  

}


export default Board;
