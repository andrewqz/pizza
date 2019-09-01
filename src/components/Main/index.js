import React, {Component} from 'react';

import localData from '../../services/localData';

import Step1 from '../Step1';
import Step2 from '../Step2';
import Step3 from '../Step3';
import Order from '../Order';

export default class Main extends Component {

    state = {
        step: 1,
        data: localData,
        isRecommended: false,
        filling: 0,
        dough: 0,
        size: 0,
        points: 0
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    previousStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    handlePoints = (value) => {
        this.setState({ points: value });
    }

    handleRecommended = (value) => {
        this.setState({ isRecommended: value });
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: JSON.parse(event.target.value) })


        console.log('infos', this.state);
    }

    render() {

        const { step } = this.state;
        const { data, filling, dough, size, isRecommended, points } = this.state;
        const infos = { data, filling, dough, size, isRecommended, points };


        switch (step) {
            default:
            case 1:
                return <Step1
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    handleRecommended={this.handleRecommended}
                    handlePoints={this.handlePoints}
                    infos={infos}
                />
            case 2: 
                return <Step2
                    nextStep={this.nextStep}
                    previousStep={this.previousStep}
                    handleChange={this.handleChange}
                    infos={infos}
                    />
            case 3:
                return <Step3
                    nextStep={this.nextStep}
                    previousStep={this.previousStep}
                    handleChange={this.handleChange}
                    infos={infos}
                />
            case 4:
                return <Order 
                    previousStep={this.previousStep}
                    infos={this.state}
                />
        }
    }

}