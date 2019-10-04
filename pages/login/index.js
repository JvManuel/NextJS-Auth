import React, { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from 'components/layout'
import { withAuthSync, authenticate } from 'utils/auth'

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state  = { 
      email: '',
      password: '',
      error: ''
    }
  }
  async submit (event) {
    event.preventDefault()

    const email = this.state.email
    const password = this.state.password

    const url = process.env.API_URL + '/a/auth/login' 
    
    try{
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password
        })
      })
      .then(response => response.json())
      await authenticate(response.data.token)
    } catch (error){

    }
  }
  render() {

    return <Layout>
    <div className='login'>
      <form onSubmit={this.submit.bind(this)}>
        <center>
          <label htmlFor='email'>Login</label>
        </center>

        <input
          type='text'
          id='email'
          name='email'
          placeholder='Email'
          value={this.state.email}
          onChange={ event => this.setState({email:event.target.value}) }
        />

        <input
          type='password'
          id='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={ event => this.setState({password:event.target.value}) }
        />

        <button type='submit'>Login</button>

        {this.state.error && <p className='error'>Error: {this.state.error}</p>}
      </form>
    </div>
  </Layout>
  }
}

export default Login
