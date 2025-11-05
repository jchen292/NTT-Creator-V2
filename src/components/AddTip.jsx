import React, { Component } from 'react'

export class AddTip extends Component {
    state = {
        title: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTip(this.state.title);
        this.setState({ title: '' });
    }

    onChange = (e) => this.setState({ [e.target.name] : e.target.value });
    getStyle = () => {
        return{
        display: 'flex',  
        border: '1px #0 solid',
        borderRadius: '5px'

        }
    }

    render() {
        return (
            <form onSubmit = {this.onSubmit} style= {this.getStyle()}>
                <input type = "text" name = "title" 
                placeholder = "Add a note, tip or a TODO here!" 
                style = {{flex: '10', padding: '5px'}}
                value = {this.state.title}
                onChange = {this.onChange}
                />

                <input type = "submit" value = "Add"  
                className = "btn" style = {{flex: '1'}}
                />   
            </form>
        )
    }
}

export default AddTip
