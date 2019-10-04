import { useEffect } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import { userInfo } from 'os'

export const authenticate = async (token) => {
  cookie.set('token', token, { expires: 1 })
  const response = await fetch(process.env.API_URL + '/a/me', {
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer ' + token
    },
  })
  .then(response => response.json())

  cookie.set('user', JSON.stringify(response.data))
  Router.push('/profile')
}

export const user = () => {
  if(cookie.get('user') !== undefined){
    return JSON.parse(cookie.get('user'))
  }
}

export const auth = ctx => {
  const { token } = nextCookie(ctx)

  /*
   * If `ctx.req` is available it means we are on the server.
   * Additionally if there's no token it means the user is not logged in.
   */
  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/login' })
    ctx.res.end()
  }

  // We already checked for server. This should only happen on client.
  if (!token) {
    Router.push('/login')
  }

  return token
}

export const logout = () => {
  cookie.remove('token')
  cookie.remove('user')
  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now())
  Router.push('/login')
}

export const isAuth = () => {
  if(cookie.get('token') == undefined){
    return false;
  }
  return true;
}

export const withAuthSync = WrappedComponent => {
  const Wrapper = props => {
    const syncLogout = event => {
      if (event.key === 'logout') {
        console.log('logged out from storage!')
        Router.push('/login')
      }
    }

    useEffect(() => {
      window.addEventListener('storage', syncLogout)

      return () => {
        window.removeEventListener('storage', syncLogout)
        window.localStorage.removeItem('logout')
      }
    }, [null])

    return <WrappedComponent {...props} />
  }

  Wrapper.getInitialProps = async ctx => {
    const token = auth(ctx)

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx))

    return { ...componentProps, token }
  }

  return Wrapper
}
