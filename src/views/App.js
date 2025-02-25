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
        let sumValue = 0
        let textValue = this.state.textValue
        if(!textValue){
            sumValue = 0
        }
        let delimiter = /[/n,]+/
        const numArray = textValue.split(delimiter).map(num => parseFloat(num) || 0);
        sumValue = numArray.reduce((sum, num) => sum + num, 0);
        this.setState({sumValue, showResult: true})    
    }

    render() {
      return (
        <div className="App">
            <header className="App-header">
                <input type="text" placeholder="Type your string.." value={this.state.textValue} onChange={(e)=> this.setState({textValue: e.target.value})} />
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
