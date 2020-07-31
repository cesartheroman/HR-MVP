import React, { Component, useState } from 'react';
import SearchBar from './Search';
import Summary from './Summary';
import TeamBuilder from './TeamBuilder';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPoke: {},
      partyPokemon: [],
      partyNames: [],
      showSummary: false,
      showTeam: false,
      description: '',
    };
    this.showPokemon = this.showPokemon.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateParty = this.updateParty.bind(this);
    this.deleteFromParty = this.deleteFromParty.bind(this);
  }

  showPokemon(pokemon) {
    this.setState({
      currentPoke: pokemon,
      showSummary: true,
    });
  }

  updateDescription(text) {
    this.setState({
      description: text,
    });
  }

  updateParty(newPokemon) {
    if (
      this.state.partyNames.includes(newPokemon.name) ||
      this.state.partyPokemon.length === 6
    ) {
      return;
    } else {
      this.setState({
        partyPokemon: [...this.state.partyPokemon, newPokemon],
        partyNames: [...this.state.partyNames, newPokemon.name],
        showTeam: true,
      });
    }
  }

  deleteFromParty(pokemonToDel) {
    const updatedParty = this.state.partyPokemon.filter((pokemon) => {
      return pokemon.name !== pokemonToDel;
    });
    const updatedNames = this.state.partyNames.filter((name) => {
      return name !== pokemonToDel;
    });
    this.setState({
      partyPokemon: updatedParty,
      partyNames: updatedNames,
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="titleName">Romandex!</h1>
        <SearchBar show={this.showPokemon} update={this.updateDescription} />
        {this.state.showSummary ? (
          <Summary
            pokemon={this.state.currentPoke}
            description={this.state.description}
            updateParty={this.updateParty}
          />
        ) : null}
        <h3 className="titleName">Build Your Party of 6!</h3>
        {this.state.showTeam ? (
          <TeamBuilder
            pokemons={this.state.partyPokemon}
            deleteFromParty={this.deleteFromParty}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
