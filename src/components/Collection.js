import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Collection extends Component {
  state = {
    amiiboGamesCollection: [],
  }

  async componentDidMount() {
    axios.get('/api_v1/games')
    .then(resp => {
      this.setState({amiiboGamesCollection: resp.data})
    })
  }

  removeCollection = (id) => {

    console.log(id)
    axios.delete(`/api_v1/games/${id}`)
    const amiiboGamesCollection =
       this.state.amiiboGamesCollection.filter(game => game.id !== id)
    this.setState({ amiiboGamesCollection })
  }

  render() {
    console.log(this.state)
    const {amiiboGamesCollection} = this.state
    return (
      <div className="collection">
        <Link className="my-collection" to="/">Search Collections</Link>
         <h2>My Amiibo Collection</h2>
         {
          amiiboGamesCollection.map(game => {
            return (
              <div key={game.id} className="single-amiibogame">
              <p>Name: {game.game_name}</p>
              <img src={game.summary} width="200" height="200"/>
              <p>Series: {game.release_date}</p>
              <button onClick={() => this.removeCollection(game.id)}>remove from collection</button>
            </div>
            )
          })
         }
      </div>
    )
  }
}
