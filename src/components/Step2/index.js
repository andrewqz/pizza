import React, { Component } from 'react';

export default class Step2 extends Component {

  state = {
    selected: false
  }

  handleItem = (e) => {
    this.setState({ selected: true });
    this.props.handleChange(e);
  }


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
    const doughs = pizza.doughs;
    
    return (
      <div className="item-list">

        <div className="selected-pizza">
          <h1>Itens selecionados</h1>
          <div className={pizza.isRecommended ? "recommended show" : "recommended hide"}>Recomendação do Dia</div>
          <p>
            <strong>Recheio: </strong> {pizza.description}
          </p>
          <p className={pizza.isRecommended ? "show" : "hide"}>
            <strong>Pontos Ganhos: </strong>
            {infos.points}
          </p>
        </div>

        <h3>Selecione a Massa:</h3>
        <form onSubmit={this.submitForm}>

          {
            doughs.map((dough) => (
              <article key={dough.id} align="start">
                <div className="item">
                  <input
                    type="radio"
                    name="dough"
                    onChange={this.handleItem}
                    value={dough.id} />
                  <strong>{dough.name}</strong>
                </div>
              </article>
            ))
          }
          
          <div className="button-area">
            <button onClick={this.goBack}>Voltar</button>
            <button type="submit" disabled={!this.state.selected}>Avançar</button>
          </div>
        </form>
      </div>

    );

  }

}