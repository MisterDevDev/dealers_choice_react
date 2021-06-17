import React, { Component } from 'react';
import axios from 'axios'


export default class EPC_form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 0,
            year: this.props.year
        }
    }

    findEpcMatch = () => {
        this.props.EPC_data.forEach((row) => {
            this.props._appNum === row.appNum ?
            this.setState({total_eligible: row.total_eligible})
            : ''
        })
    }

    postHandler = async (e) => {
        e.preventDefault()
        await axios.post('/db/post', {
            total_eligible: this.state.total,
            appNum: this.props._appNum
        })
        this.props.deselectYear()
        this.props.selectYear(this.props.year)
    }

    handleChange = (event) => {
        this.setState({
            total: event.target.value
        })
    } 

    componentDidMount () {
        this.findEpcMatch()
    }
    
    render() {
        const total = this.state.total_eligible
        return (
            <div className='EPC_form'>
                <div>EPC Amount: ${total ? (total*1).toLocaleString('en-US'): 0}</div>
                <div>
                    {total ? '' :
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
                    }
                </div>
            </div>
        )
    }
}
