import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      // the board arrays is what will dictate the number of squares!!!
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null
    }
  }
  handleGamePlay = (index) => {
    const {board} = this.state
    if(index === this.state.treasureLocation){
       // now board is a variable holding the value of the array in the state object
      board[index] = '💎'
      // here were are setting the state for the board[index] value to the tree emoji
      this.setState({board: board})
    } else {
      board[index] = '🌴'
      this.setState({board: board})
    }
   
  }
  // we can put anything inside hre that we want it to run right of the bat!!!
  // a react life cycle method --- this will run automagically
  componentDidMount() {
    let treasure = Math.floor(Math.random() * this.state.board.length)
    this.setState({treasureLocation: treasure})
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
