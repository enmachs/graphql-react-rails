import React, { Component } from 'react';

class DeleteLink extends Component {
  handleDelete = () => {
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
          mutation {
            deletePost(input: {
              id: "${this.props.postId}"
            }) {
              message
            }
          }
        `
      })
    }).then(response => {
      console.log(response)
      return response.json()
    }).then(response => {
      // console.log(response.data)
      this.props.getAllPosts()
      // this.setState({ })
    })
    
  }

  render() {
    return (
      <div className="delete-link" onClick={this.handleDelete}>
        Delete
      </div>
    );
  }
}

export default DeleteLink;
