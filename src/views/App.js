import React, {Component} from 'react';
import '../App.css';

class StringCalculator extends Component {
    constructor(props){
        super(props)
        this.state = {
            showResult:false,
            sumValue: '',
            textValue: ''
        }
    }

    add(){
        let sumValue = ''
        let textValue = this.state.textValue
        if(!textValue){
            sumValue = 0
        }
        let delimiter = /,/;
        sumValue = textValue.split(delimiter).map(Number).reduce((sum, num) => sum + num, 0);
        this.setState({sumValue, showResult: true})    
    }

    render() {
      return (
        <div className="App">
            <header className="App-header">
                <input type="text" placeHolder="Type your string.." value={this.state.textValue} onChange={(e)=> this.setState({textValue: e.target.value})} />
                <button type="submit" onClick={this.add.bind(this)}>Submit</button>
                {
                    this.state.showResult ? 
                    <p>Sum is: {this.state.sumValue}</p> : null
                }
            </header>
        </div>
      );
    }
}

export default StringCalculator;
