import React, { Component } from 'react';
import { formatCurrency } from '../../util/format-currency';

import './styles.css';

export default class Order extends Component {

  goBack = (e) => {
    e.preventDefault();
    this.props.previousStep();
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { infos } = this.props;
    const pizza = infos.data.find(response => (response.id === infos.filling));
    const dough = pizza.doughs.find(response => (response.id === infos.dough));
    const size = pizza.sizes.find(response => (response.id === infos.size));

    return (
      <div className="item-list">

        <div className="selected-pizza">
          <h1>Itens selecionados</h1>
          <p>
            <strong>Recheio: </strong> {pizza.description}
          </p>
          <p>
            <strong>Massa: </strong>
            {dough.name}
          </p>
          <p>
            <strong>Massa: </strong>
            {size.name}
          </p>
          <p>
            <strong>Pontos Ganhos: </strong>
            {infos.points}
          </p>
          <p>
            <strong>Total a pagar: </strong>
            <span>{formatCurrency(pizza.price)}</span>
          </p>
          <div className={pizza.isRecommended ? "recommended show" : "recommended hide"}>Recomendação do Dia</div>
        </div>

          <div className="button-area">
            <button onClick={this.goBack}>Voltar</button>
          </div>
      </div>

    );

  }

}