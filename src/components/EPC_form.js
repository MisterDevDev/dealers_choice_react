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
        this.props.selectYear()
        this.props.selectYear(this.props.year)
    }

    handleChange = (event) => {
        this.setState({
            total: event.target.value
        })
    } 

    destroyData = async (appNum) => {
        const deleted = await axios.delete(`/db/delete/${appNum}`)
        .then(this.reset())
    }

    reset = () => {
        this.props.selectYear()
        this.props.selectYear(this.props.year)
    }

    componentDidMount () {
        this.findEpcMatch()
    }
    
    render() {
        const total = this.state.total_eligible
        return (
            <div className='EPC_form'>
                <div className='epcContainer'>
                    <div>EPC Amount: ${total ? (total*1).toLocaleString('en-US'): 0}&emsp;&emsp;&ensp;</div> 
                    <button className='deleteBtn' onClick={()=> this.destroyData(this.props._appNum)}>DELETE DATA</button>   
                </div>
                <div>
                    {total ? 
                    <div className='updateContainer'>
                        <div>
                            <input 
                            type='number' 
                            style= {{ flex: '10', padding: '5px' }}
                            placeholder='Update EPC Number'
                            value={this.state.total}
                            onChange={this.handleChange}
                            />
                            <input 
                            type='submit' 
                            value= 'Update'
                            className= 'btn'
                            style={{flex: '1'}}
                            />
                        </div>
                    </div>
                    :
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
