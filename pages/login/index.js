import React, { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from 'components/layout'
import { authenticate } from 'utils/auth'

function Login () {
  const [userData, setUserData] = useState({ 
    email: '',
    password: '',
    error: ''
  })

  async function submit (event) {
    event.preventDefault()
    setUserData(Object.assign({}, userData, { error: '' }))

    const email = userData.email
    const password = userData.password

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

  return (
    <Layout>
      <div className='login'>
        <form onSubmit={submit}>
          <center>
            <label htmlFor='email'>Login</label>
          </center>

          <input
            type='text'
            id='email'
            name='email'
            placeholder='Email'
            value={userData.email}
            onChange={event =>
              setUserData(
                Object.assign({}, userData, { email: event.target.value })
              )
            }
          />

          <input
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            value={userData.password}
            onChange={event =>
              setUserData(
                Object.assign({}, userData, { password: event.target.value })
              )
            }
          />

          <button type='submit'>Login</button>

          {userData.error && <p className='error'>Error: {userData.error}</p>}
        </form>
      </div>
      <style jsx>{`
        .login {
          max-width: 340px;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        form {
          display: flex;
          flex-flow: column;
        }
        label {
          font-weight: 600;
        }
        input {
          padding: 8px;
          margin: 0.3rem 0 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .error {
          margin: 0.5rem 0 0;
          color: brown;
        }
      `}</style>
    </Layout>
  )
}

export default Login