import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      // the board arrays is what will dictate the number of squares!!!
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
    }
  }
  handleGamePlay = (index) => {
    // now board is a variable holding the value of the array in the state object
    const {board} = this.state
    board[index] = '🌴'
    // here were are setting the state for the board[index] value to the tree emoji
    this.setState({board: board})
  }
//  now we need Square to tell App....
  render(){
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div id="gameboard">
          {/* we will map the board array that is in the state object */}
          {this.state.board.map((value, index) => {
            return <Square value={value} key={index} index={index} handleGamePlay={this.handleGamePlay}/>
          })}
        </div>
      </>
    )
  }
}
export default App
