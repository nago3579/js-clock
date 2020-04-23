import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
     super(props);
     this.state = {
       time: "Scroll Down",
       addTime: 5
     };
   }

  componentDidMount = () => {
       window.addEventListener('scroll', this.handleScroll)
       window.scrollTo(0, 0)
   }


  componentWillUnmount = () => {
       window.removeEventListener('scroll', this.handleScroll)
   }

handleScroll = (event) =>  {
  if(this.state.addTime > 5){
    var today = new Date();
    var hours
    var minutes
    var seconds
    if(today.getHours().toString().length === 1){
      hours = '0' + today.getHours().toString()
    } else {
      hours = today.getHours().toString()
    }
    if(today.getMinutes().toString().length === 1){
      minutes = '0' + today.getMinutes().toString()
    } else {
      minutes = today.getMinutes().toString()
    }
    if(today.getSeconds().toString().length === 1){
      seconds = '0' + today.getSeconds().toString()
    } else {
      seconds = today.getSeconds().toString()
    }
    var timeString = hours + ":" + minutes + ":" + seconds;
     var concat = this.state.time + " " + timeString;
     this.setState({
       time: concat,
       addTime: 0
    })
  }
  else
  {
    this.setState({
      addTime: this.state.addTime+1,
   })
  }
 };

   render() {
     return (
       <div className="App">
         <div className="App-header">
          <div style = {{fontSize: "45vh"}}>
            {this.state.time}
          </div>
         </div>
       </div>
     );
   }
 }

export default App;
