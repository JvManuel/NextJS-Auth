import React from 'react'
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'
import nextCookie from 'next-cookies'
import Layout from 'components/layout'
import { withAuthSync } from 'utils/auth'
import getHost from 'utils/get-host'

class Profile extends React.Component {
  static async getInitialProps(ctx) {
    const response = await fetch(process.env.API_URL + '/a/me', {
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' + nextCookie(ctx).token
      },
    })
    .then(response => response.json())

    return response
  }
  
  render() {

    return <Layout>
      <div>
        Welcome {this.props.data.name.firstName} {this.props.data.name.lastName}
      </div>
      {/* <style jsx>{`
        body{
          background-color: red;
        }
        img {
          max-width: 200px;
          border-radius: 0.5rem;
        }

        h1 {
          margin-bottom: 0;
        }

        .lead {
          margin-top: 0;
          font-size: 1.5rem;
          font-weight: 300;
          color: #666;
        }

        p {
          color: #6a737d;
        }
      `}</style>  */}
    </Layout>
    
  }
}

export default withAuthSync(Profile)
