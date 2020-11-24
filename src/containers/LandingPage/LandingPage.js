import React, {Component} from 'react';
import Button from '../../components/Button/Button'
class LandingPage extends Component {
    state = {
        buttons:["LEFT", "RIGHT"]
    }
    btnClickHandler = (index)=>{
        const buttons = [...this.state.buttons];
        const newButtons = [...[...buttons.slice(0,index)],"LEFT", "RIGHT", ...[...buttons].slice(index+1)];
        this.setState({buttons:newButtons})
    }
    render(){
        const buttons = this.state.buttons.map((button, index)=>{
            return <Button btnType = {button} btnClickHandler = {()=>{this.btnClickHandler(index)}} />
        })
        return(
           buttons
        )
    }
}
export default LandingPage;