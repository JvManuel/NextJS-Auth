import Link from 'next/link'
import { logout, isAuth } from 'utils/auth'

class Header extends React.Component {
  menus(){
    const menuToRender = []
    const menus = [
      {
        name  : 'Home',
        link  : '/'
      },
    ]
    
    menus.forEach(function(menuItem, key){
      menuToRender.push(<li key={key}>
        <Link href={menuItem.link}>
          <a>{menuItem.name}</a>
        </Link>
      </li>)
    })

    return menuToRender
  }
  authentication(){
    if(isAuth()){
      return <React.Fragment>
        <li>
          <Link href='/profile'>
            <a>Profile</a>
          </Link>
        </li>
        <li>
          <a onClick={logout}>Logout</a>
        </li>
      </React.Fragment>
    }
    else{
      return <React.Fragment>
        <li>
          <Link href='/login'>
            <a>Login</a>
          </Link>
        </li>
      </React.Fragment>
    }
  }
  render(){
    return <header>
    <nav>
      <ul>
        {this.menus()}
        {this.authentication()}
      </ul>
    </nav>
    </header>
  }
}

export default Header
