import ApolloClient from 'apollo-boost'
import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'

// Non-component files
import './App.css'
import logo from './logo.png'

// Components
import Launches from './Components/Launches'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
})

class App extends Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX"
            style={{ width: 300, display: 'block', margin: 'auto' }}
          />
          <Launches/>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
