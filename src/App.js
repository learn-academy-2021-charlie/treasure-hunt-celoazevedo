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

  render(){
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div id="gameboard">
          {/* we will map the board array that is in the state object */}
          {this.state.board.map((value, index) => {
            return <Square value={value} key={index}/>
          })}
        </div>
      </>
    )
  }
}
export default App
