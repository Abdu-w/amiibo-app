import React, { Component } from 'react';
import axios from 'axios'
 
 

export default class GameForm extends Component {
  state = { 
    id: "",
    comment : "",
    thread : [],
    editing: false,
   }

   addComment = (e) =>  {
     this.setState({
      comment: e.target.value
     })
   }

   submitComment = (e) => {
    e.preventDefault()
    const { editing, thread, id } = this.state
    let allComments = thread
    const data ={
      "id": editing ? id : Math.random() * 100000000000 + 1,
      "comments": this.state.comment
    }

    if(editing) {
      allComments = allComments.map(c => {
        if (c.id === id) return data
        return c
      })
      axios.put(`/api_v2/comment/${id}`, data)
    } else {
      allComments = [...thread, data]
      axios.post('/api_v2/comment', data)
    }

    this.setState({
      id: "",
      comment : "",
      thread : allComments,
      editing: false,
    })
     
   }

   async componentDidMount() {
    axios.get('/api_v2/comment')
    .then(resp => {
      this.setState({thread: resp.data })
    })
  }

  editComment = (id, comment) => {
    this.setState({
      id,
      comment,
      editing: true,
    })
  }


  render() {
    console.log(this.state.thread)
    return (
      <div className="game-form">
        <h2>Comments</h2>
        <form onSubmit={this.submitComment}>
          <textarea type='text' placeholder="write a comment" value={this.state.comment} onChange={this.addComment} />
          <button type='submit'>submit</button>
        </form>
        {
          this.state.thread.length   ?
            this.state.thread.map(c  => 
              <p key={c.id} className="comment" onClick={() => this.editComment(c.id, c.comments)}>
                {c.comments} 
              </p>)
          :null
        }
      </div>    
    );
  }
}



