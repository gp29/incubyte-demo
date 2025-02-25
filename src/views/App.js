import React, {Component} from 'react';
import '../App.css';

class StringCalculator extends Component {
    constructor(props){
        super(props)
        this.state = {
            sumArr: []
        }
    }

    componentDidMount(){
        this.add("")
        this.add("1")
        this.add("1,2")
        this.add("1,2,3,4,5")
        this.add("1\n2,3")
        this.add("//;\n1;2")
        this.add("1\n2,-3,-4")
        this.add("1\n2,1001,1002")
        this.add("//[***]\n1***2***3")
        this.add("//[*][%]\n1*2%3")
        this.add("//[**][%%]\n1**2%%3")
    }

    add(input){
        let sumArr = this.state.sumArr
        let sumValue = 0
        let textValue = input
        if(textValue){
            let delimiter = /,|\n|;/;
            const match = textValue.match(/^\/\/(\[.*\])[\n](.*)/);
            if(match){
                textValue = match[2];

                const delimiterVal = match[1];
                const delimiters = delimiterVal.match(/\[(.*?)\]/g).map(d => d.slice(1, -1));
                delimiter = new RegExp(delimiters.map(d => d.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')).join('|'));
            }
            let numArray = textValue.split(delimiter).map(num => parseFloat(num) || 0);
            const negatives = numArray.filter(num => num < 0);
            if (negatives.length) {
                sumValue = `Negative numbers not allowed: ${negatives.join(", ")}`
            }
            else{
                numArray = numArray.filter((x) => x < 1000)
                sumValue = numArray.reduce((sum, num) => sum + num, 0);
            }
        }
        sumArr.push({input, sum: sumValue})
        this.setState({sumArr})    
    }

    render() {
      return (
        <div className="App">
            <header className="App-header">
                {
                    this.state.sumArr.map((e, key) => {
                        return <p key={key}>Result of string "{e.input}" is: {e.sum}</p> ;
                    })
                }
            </header>
        </div>
      );
    }
}

export default StringCalculator;
