import React from 'react';
import './ButtonControl.scss';
import { connect } from 'react-redux';
import { resetCount, decreaseCount, increaseCount } from '../../redux/reducers/countReducer';

class ButtonControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numAmount: 1
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e) {
        this.setState({ numAmount: +e.target.value })
    }
    handleSubmit(e) {
        const { numAmount } = this.state;
        const { resetCount, decreaseCount, increaseCount } = this.props;

        if (e.target.name === 'decrease') {
            decreaseCount(numAmount);
        } else if (e.target.name === 'increase') {
            increaseCount(numAmount);
        } else {
            resetCount();
        }
    }
    render() {
        return (
            <section className='button-control'>
                <input
                    value={ this.state.numAmount }
                    onChange={ this.handleInput }
                />
                <div className='buttons'>
                    <button 
                        name='decrease'
                        onClick={ this.handleSubmit }
                    >
                        DECREASE
                    </button>
                    <button
                        onClick={ this.handleSubmit }
                    >
                        CLEAR
                    </button>
                    <button
                        name='increase'
                        onClick={ this.handleSubmit }
                    >
                        INCREASE
                    </button>
                </div>
            </section>
        )
    }
}

export default connect(null, {
    resetCount,
    decreaseCount,
    increaseCount
})(ButtonControl);