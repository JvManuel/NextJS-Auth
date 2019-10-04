import React from 'react'
import Layout from 'components/layout'
import { withAuthSync, user } from 'utils/auth'
import { withRedux } from 'lib/redux'
import { useDispatch } from 'react-redux'

class Profile extends React.Component {
  static async getInitialProps({reduxStore}){
    const { dispatch } = reduxStore
    
  }
  constructor(props){
    super(props)
    this.state = {
      user : user()
    }
  }
  // componentDidMount() {
    
  // }
  render() {
    
    if(this.state.user){
      return <Layout>
          Welcome {this.state.user.name.firstName} {this.state.user.name.lastName}
      </Layout>
    }
    else{
      return <Layout>
        Rendering 
      </Layout>
    }
    
  }
}

export default withRedux(withAuthSync(Profile))
