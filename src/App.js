import React from 'react';

class App extends React.Component{
  state = {
    nome: ''
  }

  criaComboBox = () => {
    const opcoes = ["José","Osnir"]
    const comboBoxOpcoes = opcoes.map(opcao => <option> {opcao} </option>)
    return(
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  modificarNome = (event) => {
       this.setState({
         nome: event.target.value
       })
  }

  render(){
    const MeuComboBox = () => this.criaComboBox();

    return(
      <>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1>Hello {this.props.nome} sua idade é {this.props.idade} </h1>
        <MeuComboBox/>
      </>
    )
  }
}

export default App;