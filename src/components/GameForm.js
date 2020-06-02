import React, { Component } from 'react';
import axios from 'axios'
 


export default class GameForm extends Component {
  state = { 
    id: "",
    comment : "",
    thread : []
   }

   addComment = (e) =>  {
     this.setState({
      id: Math.random() * 100000000000 + 1,
      comment: e.target.value
     })
   }
   submitComment = (e) => {
    e.preventDefault()
    const data ={
      "id":this.state.id,
      "comments": this.state.comment
    }
    
    axios.post('/api_v2/comment', data)
   }

   async componentDidMount() {
    axios.get('/api_v2/comment')
    .then(resp => {
      this.setState({thread: resp.data })
    })
  }
  editComment = (id) => {
    console.log(id)
    const data = {
      "id":id,
      "comments":this.state.comment
    }
    console.log(data.id,'hdjlhjl')
    axios.put(`/api_v2/comment/${id}`, data)
  }


  render() {
    console.log(this.state.thread)
    return (
      <div className="game-form">
        {
          this.state.thread.length   ?
          
            this.state.thread.map(c  => 
            <button  onClick={() => this.editComment(c.id)}>
              <p>
                {c.comments} 
              </p>
            </button> )
          :null
        }
        <form onSubmit={this.submitComment}>
          <textarea type='text' value={this.state.comment} onChange={this.addComment} />
          <button type='submit'>submit</button>
        </form>

      </div>    
    );
  }
}



