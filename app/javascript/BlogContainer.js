import React, { Component } from 'react';
import DeleteLink from './DeleteLink';
import FormPost from './FormPost';

export default class BlogContainer extends Component {

  state = {
    posts: []
  }

  componentDidMount () {
    this.getAllPosts()
  }

  getAllPosts = () => {
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
          query {
            posts {
              title
              content
              id
            }
          }
        `
      })
    }).then(response => {
      // console.log(response)
      return response.json()
    }).then(response => {
      // console.log(response.data)
      // debugger
      this.setState({
        posts: response.data.posts
      })
    })
  }

  render(){

    const posts = this.state.posts

    return (
      <div>
        <h1>Hello from blogcontainer</h1>
        <FormPost 
          getAllPosts={this.getAllPosts}
        />
        {
          posts.map((post, index) => {
            return (
              <div key={index}>
                <h2> { post.title } </h2>
                <DeleteLink 
                  postId={post.id}
                  getAllPosts={this.getAllPosts}
                />
                <p> { post.content } </p>
                <hr/>
              </div>
            )
          })
        }
      </div>
    )
  }
}
