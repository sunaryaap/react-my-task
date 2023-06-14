import React from "react";
import Button from "./Button";
// import PropTypes from "prop-types";
import "../styles/FormInput.css"

class FormInput extends React.Component {
    state = {
        text: ""
    }

    change = e => {
        this.setState({ text: e.target.value })
    }
    
    submit = e => {
        e.preventDefault();
        if(this.state.text !== ""){
            this.props.add(this.state.text)
        }
        this.setState({
            text: ""
        })
    }

    render(){
        return(
            <form style={formInput}>
                <input 
                    style={input} 
                    type="text" 
                    placeholder="add task"
                    onChange={this.change}
                    value={this.state.text}
                    />
                <Button 
                    text="Add"
                    variant="primary" 
                    action={this.submit} />
            </form>
        )
    }
}

// FormInput.propTypes = {

// }

export default FormInput;


const formInput = {
    background: "#fff",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}

const input = {
    width: "70%",
    border: "none"
}

