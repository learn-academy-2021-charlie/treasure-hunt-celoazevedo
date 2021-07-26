import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      // the board arrays is what will dictate the number of squares!!!
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null,
      bombLocation: null,
      counter: 5,
      message: ''
    }
  }
  handleGamePlay = (index) => {
    const {board} = this.state
    const {counter} = this.state
    // const {message} = this.state
    if(index === this.state.treasureLocation && counter !== 0){
       // now board is a variable holding the value of the array in the state object
      board[index] = '💎'
      // winning message
      // here were are setting the state for the board[index] value to the tree emoji
      this.setState({
        board: board,
        message: 'You Won!',
        counter: 0
      })
    } else if(index === this.state.bombLocation && counter !== 0) {
      // now board is a variable holding the value of the array in the state object
      board[index] = '💣'
      // here were are setting the state for the board[index] value to the tree emoji
      this.setState({
        board: board,
        message: 'You Lost!',
        counter: 0
      })
    } else if (counter !== 0) {
      board[index] = '🌴'
      this.setState({
        board: board,
        counter: counter-1
      })
      console.log(counter)
    } else if (counter === 0) {
      this.setState({
        board: board,
        message: 'No more trys for you!'
      })
      alert('No more trys for you!')
    } 
    // else {
    //   board[index] = '🙉'
    //   this.setState({
    //     board: board,
    //     // message: 'No more trys for you!'
    //   })
    //   alert('No more trys for you!')
    // }
   
  }
  // we can put anything inside hre that we want it to run right of the bat!!!
  // a react life cycle method --- this will run automagically
  componentDidMount() {
    let treasure = Math.floor(Math.random() * this.state.board.length)
    let bomb = Math.floor(Math.random() * this.state.board.length)
    this.setState({
      treasureLocation: treasure,
      bombLocation: bomb
    })
  }
//  now we need Square to tell App....
  render(){
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <h5>{`${this.state.counter} attempts left`}</h5>
        <h5>{this.state.message}</h5>
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
