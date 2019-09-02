import React, { Component } from 'react';
import { formatCurrency } from '../../util/format-currency';

export default class Step1 extends Component {
    state = {
        recommended: false,
        selected: false
    }

    handleItem = (e) => {
        // Get attrib "recommended" from input
        const rec = JSON.parse(e.target.attributes.getNamedItem('recommended').value);

        this.setState({ recommended: rec });
        this.setState({ selected: true });
        
        const points = rec ? 10 : 0;

        this.props.handlePoints(points);
        this.props.handleRecommended(rec);
        this.props.handleChange(e);
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { infos } = this.props;
        const pizzas = infos.data;

        return (
            <div className="item-list">

                <div className={this.state.recommended ? "points show" : "points hide"}>Você ganhou pontos!</div>

                <h3>Selecione o Recheio:</h3>
                <form onSubmit={this.submitForm}>
                    {
                        pizzas.map((pizza) => (
                            <article key={pizza.id} align="start">
                                <div className="item">
                                    <input
                                        type="radio"
                                        name="filling"
                                        onChange={this.handleItem}
                                        recommended={pizza.isRecommended.toString()}
                                        value={pizza.id} />
                                    <strong>{pizza.description}</strong> - <span>{formatCurrency(pizza.price)}</span>
                                    <p>({pizza.ingredients})</p>
                                    <div className={pizza.isRecommended ? "recommended show" : "recommended hide" }>Recomendação do Dia</div>
                                </div>
                            </article>
                        ))
                    }
                    <div className="button-area">
                        <button type="submit">Avançar</button>
                    </div>
                </form>
            </div>

        );

    }

}