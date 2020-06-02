import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import nameList from './amiboNames'

export default class Games extends Component{
  state = {
    isLoading:true,
    amiboNames: nameList, 
    amiiboGames: [],
    amiiboChar: ''

  }

  handleChange = (event) => {
    this.setState({amiiboChar: event.target.value});
  }

  handleSubmit = (event) => {
    const { amiiboChar } = this.state
    try {
       axios.get(`https://www.amiiboapi.com/api/amiibo/?character=${amiiboChar}p`)
        .then(resp => {
          this.setState({amiiboGames: resp.data.amiibo})
          console.log(resp)
        })
      
    } catch (error) {
      console.error('error')
    }
    event.preventDefault();
  }


  addToCollection = (game) => {
    const data =  {
        "id": Math.random() * 100000000000 + 1,
        "game_name": game.character, // name of char
        "release_date": game.amiiboSeries,
        "summary": game.image
    }
    axios.post('api_v1/games', data)
  }
 

  render() {

    const {amiiboGames, amiboNames} = this.state

    const amiiboGameList = (
      <div>
        <Link className="my-collection" to="/collection">View Collection</Link>
        <h2>Games</h2>
        {amiiboGames.map(game => {
          return (
            <div className="single-amiibogame">
              <p>Name: {game.name}</p>
              <img src={game.image} width="200" height="200"/>
              <p>Series: {game.amiiboSeries}</p>
              {
                game.release.jp 
                ? <p>Release: {game.release.jp}</p>
                : null
              }
              <button onClick={() => this.addToCollection(game)}>add to collection</button>
            </div>
          )
        })}
      </div>
    )

    console.log(this.state)
    return(
      <div className="games">
          <h1>Select your Amibo</h1>
          <form onSubmit={this.handleSubmit}>
            <select value={this.state.amiiboChar} onChange={this.handleChange}>
              {amiboNames.map((name, idx) => <option value={name} key={idx}>{name}</option>)}
            </select>
            <input type="submit" value="Search Amiibo" />
          </form>
         {
          amiiboGames.length 
            ? amiiboGameList 
            : <p>What would be the selection?</p>
          }
      </div>

    );
  }
}

