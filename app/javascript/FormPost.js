import React, { Component } from 'react';

class FormPost extends Component {
  state = { 
    title: '',
    content: ''
  }

  handleInputChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    // debugger
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
          mutation {
            createPost(input: {
              title: "${this.state.title}",
              content: "${this.state.content}"
            }) {
              post {
                id
              }
            }
          }
        
        `
      })
    }).then(response => {
      // console.log(response)
      return response.json()
    }).then(response => {
      // console.log(response.data)
      this.setState({ title: '', content: '' })
      this.props.getAllPosts()
    }).catch(response => {
      console.log(response.errors)
    })
  }

  render() {
    return (
      <div className="form-post">
        <form onSubmit={this.handleSubmit}>
          <input 
            style={ {'display': 'block'} }
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />

          <textarea 
            name="content"
            value={this.state.content}
            placeholder="Content"
            onChange={this.handleInputChange}
            cols="30"
            rows="10"
          >
          </textarea>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default FormPost;
