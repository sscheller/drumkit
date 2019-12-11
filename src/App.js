import React from 'react';
import './App.css';

const data = [

  { id: 'Tom Tom', letter: 'A', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
  { id: 'Elsa', letter: 'S', src: 'elsa.m4a' },
  { id: 'Frog', letter: 'D', src: 'frogsquek.m4a' },
  {id: 'Kawaii', letter: 'F', src: 'Kawaii.m4a'}, 
  {id: 'Recorder', letter: 'G', src: 'recorder.m4a'}, 
  {id: 'Ronnie', letter: 'H', src: 'ronnie.m4a'}, 
  {id: 'Steve', letter: 'J', src: 'steve2.m4a'}, 
 
]

class DrumPad extends React.Component {
 
  componentDidMount() {
    console.log(this.audio)
    document.addEventListener('keydown', this.handleKeydown)
    window.focus()
  }
  
 componentWillUnmount() {
   document.removeEventListener('keydown', this.handleKeydown)
 }
  
  handleKeydown = e => {
    if(e.keyCode === this.props.letter.charCodeAt()
    ) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
  }
 
  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }
  
  render() {
    return (
      <div 
          className='drum-pad' 
          onClick={this.handleClick}
      >
        <h1>{this.props.letter}</h1>
        <p>{this.props.id}</p>
        <audio id={this.props.letter}
               className='clip'
               src={this.props.src}
               ref={ref => this.audio = ref}
          ></audio>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display: 'Click or Press a Key'
    }
  }
  
  handleDisplay = display => this.setState({ display })
  
  render(){
    return(
    <div id='drum-machine'>
        <div id='display'>{this.state.display}</div>
        
        <div id='drum-pads'>{data.map(d => (
            
          <DrumPad
            key={d.id}
            id={d.id}
            letter={d.letter}
            src={d.src}
            handleDisplay={this.handleDisplay}    
          /> 
            
         ))}</div>
    </div>
    )
  }
}


export default App;
