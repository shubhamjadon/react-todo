import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            listValues: []
        }
    }

    setInputValue = (event) => {       
        this.setState({
            inputValue: event.target.value,
        })    
    }
    updatelist = (key) => {
        this.setState({
            listValues: this.state.listValues.filter((value)=>{
                if(Number(value.key) === key) return false;
                return true;
            })
        })
    }
    setListValues = () => {
        if(this.state.inputValue === '')return;
        let array = this.state.listValues
        let newKey = Date.now()
        array.push(
            <tr  key = {newKey}>
                <td className='vcenter lead'>{this.state.inputValue}</td>
                <td><button onClick={_=>this.updatelist(newKey)} className = "btn btn-lg float-right"><i className="far fa-trash-alt"></i></button></td>
            </tr>)
        this.setState({
            inputValue: '',
            listValues: array
        });
    }
    
    enter = (event) => {
        if(event.keyCode===13)this.setListValues()
    }
    render(){
        return(
            <div className="container">
                <h1 className="display-4">Today's tasks</h1>
                <div className="mt-3 input-group input-group-lg">
                    <input 
                        type="text" 
                        className="form-control"
                        onChange={this.setInputValue} 
                        onKeyDown={this.enter} 
                        value={this.state.inputValue} 
                        autoFocus
                    />
                    {/* <div className="input-group-append">
                        <button onClick={this.setListValues} className = "btn btn-lg btn-primary px-5">Add</button>
                    </div> */}
                </div>
                <br />
                    <table className="table table-striped">
                        <tbody>
                            {this.state.listValues}
                        </tbody>
                    </table>
            </div>
            
        );
            }
        }
        
        
ReactDOM.render(<App/>, document.getElementById('root'));