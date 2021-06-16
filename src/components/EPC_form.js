import React, { Component } from 'react';
import axios from 'axios'


export default class EPC_form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 0
        }
    }

    postHandler = async (e) => {
        e.preventDefault()
        const post = await axios.post('/db/post', {
            total_eligible: this.state.total,
            appNum: this.props._appNum
        })
        console.log(post)
    }

    handleChange = (event) => {
        this.setState({
            total: event.target.value
        })
    } 
    
    render() {
    return (
        <form onSubmit={this.postHandler} style={{ display: 'flex' }}>
        <div>
        <input 
        type='number' 
        style= {{ flex: '10', padding: '5px' }}
        placeholder='Add EPC Number...'
        value={this.state.total}
        onChange={this.handleChange}
        />
        <input 
        type='submit' 
        value= 'Submit'
        className= 'btn'
        style={{flex: '1'}}
        />
        </div>
    </form>
    )
    }
}
