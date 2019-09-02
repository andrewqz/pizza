import React, { Component } from 'react';

export default class Step3 extends Component {

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
    console.log(infos);
    const pizza = infos.data.find(response => (response.id === infos.filling));
    const dough = pizza.doughs.find(response => (response.id === infos.dough));
    const sizes = pizza.sizes;

    return (
      <div className="item-list">

        <div className="selected-pizza">
          <h1>Itens selecionados</h1>
          <div className={pizza.isRecommended ? "recommended show" : "recommended hide"}>Recomendação do Dia</div>
          <p>
            <strong>Recheio: </strong> {pizza.description}
          </p>
          <p>
            <strong>Massa: </strong> {dough.name}
          </p>
        </div>

        <h3>Selecione o Tamanho:</h3>
        <form onSubmit={this.submitForm}>

          {
            sizes.map((size) => (
              <article key={size.id} align="start">
                <div className="item">
                  <input
                    type="radio"
                    name="size"
                    onChange={this.handleItem}
                    value={size.id} />
                  <strong>{size.name}</strong>
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